// pages/workshop-services/booking/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/DefaultLayout";
import { useSession } from "next-auth/react";

type Workshop = {
  id: string;
  name: string;
  description?: string | null;
  type?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  duration?: number | string;
  price?: number | null;
  currency?: string | null;
  location?: string | null;
  maxSeats?: number | null;
};

type WorkshopBooking = {
  id: string;
  workshopId?: string;
  userId?: string | null;
  nbSeats: number;
  createdAt?: string;
  updatedAt?: string;
};

const capacityOf = (w?: Partial<Workshop>) => Number(w?.maxSeats ?? 0);

function fmtDate(d?: string | null) {
  if (!d) return "—";
  const dt = new Date(d);
  return isNaN(+dt) ? "—" : dt.toLocaleString();
}
function fmtMoney(v?: number | null, currency: string = "CAD") {
  if (typeof v !== "number" || !isFinite(v)) return "—";
  try {
    return v.toLocaleString(undefined, { style: "currency", currency });
  } catch {
    return `${v.toFixed(2)} ${currency}`;
  }
}

export default function WorkshopDetailsPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const isReady = router.isReady;
  const id = React.useMemo(() => {
    const q = router.query?.id;
    return typeof q === "string" ? q : Array.isArray(q) ? q[0] : undefined;
  }, [router.query?.id]);

  const currentUserId = React.useMemo(() => {
    const sUser = session?.user as any;
    return typeof sUser?.id === "string" ? sUser.id : undefined;
  }, [session?.user]);

  // Workshop
  const [workshop, setWorkshop] = React.useState<Workshop | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Availability (summary)
  const [remainingSeats, setRemainingSeats] = React.useState<number | null>(null);
  const [remLoading, setRemLoading] = React.useState(false);
  const [remError, setRemError] = React.useState<string | null>(null);

  // My booking (existing or null)
  const [myBooking, setMyBooking] = React.useState<WorkshopBooking | null>(null);

  // Form state (bound to myBooking/draft)
  const [nbSeats, setNbSeats] = React.useState<number>(1);
  const [dirty, setDirty] = React.useState(false);

  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = React.useState<string | null>(null);

  // 1) Load workshop
  React.useEffect(() => {
    if (!isReady || !id) return;
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/get-workshop-by-id?id=${encodeURIComponent(id)}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load workshop: ${res.status}`);
        const data = await res.json();
        const w: Workshop | undefined = data?.workshop;
        if (!w) throw new Error("Workshop not found.");
        if (!alive) return;
        setWorkshop(w);
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message ?? "Failed to load workshop.");
        setWorkshop(null);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [isReady, id]);

  // 2) Load availability summary
  const fetchAvailability = React.useCallback(async (wid: string, w: Workshop | null) => {
    const cap = capacityOf(w || undefined);
    try {
      setRemLoading(true);
      setRemError(null);
      const res = await fetch(
        `/api/get-bookings-summary?workshopId=${encodeURIComponent(wid)}`,
        { cache: "no-store" }
      );
      if (res.status === 204 || res.status === 404) {
        setRemainingSeats(cap);
        return;
      }
      if (!res.ok) throw new Error(`Failed to load availability: ${res.status}`);
      const { reservedSeats } = await res.json();
      const remaining = Math.max(0, cap - Number(reservedSeats || 0));
      setRemainingSeats(remaining);
    } catch (e: any) {
      setRemError(e?.message ?? "Failed to load availability.");
      setRemainingSeats(null);
    } finally {
      setRemLoading(false);
    }
  }, []);

  // 3) Load my booking only
  const fetchMyBooking = React.useCallback(
    async (wid: string, uid?: string) => {
      if (!uid) return; // guest: don't override local myBooking/nbSeats
      const res = await fetch(
          `/api/get-my-booking?workshopId=${encodeURIComponent(wid)}&userId=${encodeURIComponent(uid)}`,
          { cache: "no-store" }
        );

      if (res.status === 404 || !res.ok) {
        setMyBooking(null);
        if (!dirty) setNbSeats(1);
        return;
      }
      const json = await res.json().catch(() => ({}));
      const booking: WorkshopBooking | null =
        json?.booking ?? (json?.id ? (json as WorkshopBooking) : null);
      setMyBooking(booking ?? null);
      if (!dirty) setNbSeats(Number(booking?.nbSeats ?? 1));
    },
    [dirty]
  );

  // Keep nbSeats synced with server when not editing
  React.useEffect(() => {
    if (!dirty) {
      const serverSeats = Number(myBooking?.nbSeats ?? 1);
      if (serverSeats !== nbSeats) setNbSeats(serverSeats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myBooking, dirty]);

  // Initial loads
  React.useEffect(() => {
    if (id && workshop) {
      fetchAvailability(id, workshop);
      fetchMyBooking(id, currentUserId);
    }
  }, [id, workshop, currentUserId, fetchAvailability, fetchMyBooking]);

  // Auto-refresh availability + myBooking every 15s
  React.useEffect(() => {
    if (!id || !workshop) return;
    const h = setInterval(() => {
      fetchAvailability(id, workshop);
      fetchMyBooking(id, currentUserId);
    }, 15_000);
    return () => clearInterval(h);
  }, [id, workshop, currentUserId, fetchAvailability, fetchMyBooking]);

  const capacity = capacityOf(workshop || undefined);

  // Submit (create or update) with delta validation only
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !workshop) return;

    setSubmitError(null);
    setSubmitSuccess(null);

    const rem = Number(remainingSeats ?? 0);
    const current = Number(myBooking?.nbSeats ?? 0);
    const delta = nbSeats - current; // positive = add seats, negative = reduce

    if (nbSeats < 1) {
      setSubmitError("Please select at least 1 seat.");
      return;
    }
    if (delta > rem) {
      setSubmitError(`Only ${rem} seat(s) remain.`);
      return;
    }

    try {
      setSubmitLoading(true);

      if (myBooking?.id) {
        // UPDATE existing
        const res = await fetch(`/api/workshop-bookings/${encodeURIComponent(myBooking.id)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...myBooking, nbSeats }),
        });
        if (!res.ok) throw new Error(await res.text());

        // update local state from response if JSON is returned
        try {
          const json = await res.json();
          const saved: WorkshopBooking =
            json?.booking ?? (json?.id ? json : null);
          if (saved) {
            setMyBooking(saved);
            setNbSeats(saved.nbSeats);
          }
        } catch {
          // ignore non-JSON
        }

        setSubmitSuccess("Booking updated.");
      } else {
        // CREATE new (guest-friendly too)
        const payload = { workshopId: id, userId: currentUserId, nbSeats };
        const res = await fetch("/api/workshop-bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(await res.text());

        // update local state from response if JSON is returned
        try {
          const json = await res.json();
          const saved: WorkshopBooking =
            json?.booking ?? (json?.id ? json : null);
          if (saved) {
            setMyBooking(saved);
            setNbSeats(saved.nbSeats);
          } else {
            // if no JSON body, still flip button using a minimal object
            setMyBooking({ id: "temp", nbSeats, workshopId: id } as any);
          }
        } catch {
          // if not JSON, still flip button using a minimal object
          setMyBooking({ id: "temp", nbSeats, workshopId: id } as any);
        }

        setSubmitSuccess("Booking created.");
      }

      // reset dirty so field can resync with server updates
      setDirty(false);

      // Always refresh availability; only refresh "my booking" if we have a user id
      await fetchAvailability(id, workshop);
      if (currentUserId) {
        await fetchMyBooking(id, currentUserId);
      }
    } catch (err: any) {
      setSubmitError(err?.message || "Booking failed.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Layout activePage="workshopServices">
      <div className="mx-auto max-w-6xl p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900">
            {workshop ? workshop.name : "Workshop details"}
          </h1>
          {workshop?.description && (
            <p className="mt-2 text-gray-700 whitespace-pre-line">{workshop.description}</p>
          )}
        </div>

        {loading && <div className="text-gray-600">Loading workshop…</div>}
        {error && !loading && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}
        {!loading && !error && !workshop && <div className="text-gray-600">No workshop found.</div>}

        {workshop && (
          <div className="grid gap-8 md:grid-cols-3">
            {/* LEFT: Overview (spans 2 cols) */}
            <section className="md:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Overview</h2>
              <dl className="grid gap-6">
                {/* Row 1: Name, Location, Type */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <dt className="text-sm text-gray-500">Name</dt>
                    <dd className="text-base text-gray-900">{workshop.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Location</dt>
                    <dd className="text-base text-gray-900">{workshop.location ?? "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Type</dt>
                    <dd className="text-base text-gray-900">{workshop.type ?? "—"}</dd>
                  </div>
                </div>

                {/* Row 2: Start, End, Duration */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <dt className="text-sm text-gray-500">Start</dt>
                    <dd className="text-base text-gray-900">{fmtDate(workshop.startDate)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">End</dt>
                    <dd className="text-base text-gray-900">{fmtDate(workshop.endDate)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Duration</dt>
                    <dd className="text-base text-gray-900">
                      {typeof workshop.duration === "number" || typeof workshop.duration === "string"
                        ? `${workshop.duration}`
                        : "—"}
                    </dd>
                  </div>
                </div>

                {/* Row 3: Price */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <dt className="text-sm text-gray-500">Price</dt>
                    <dd className="text-base text-gray-900">
                      {fmtMoney(workshop.price ?? undefined, workshop.currency ?? "CAD")}
                    </dd>
                  </div>
                </div>
              </dl>
            </section>

            {/* RIGHT: Booking */}
            <section className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-blue-900">Booking for this workshop</h2>

              {submitSuccess && (
                <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-green-700">
                  {submitSuccess}
                </div>
              )}
              {submitError && (
                <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-red-700">
                  {submitError}
                </div>
              )}

              {/* Availability: remaining / maxSeats */}
              <div className="mb-3 flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <span className="text-sm text-gray-600">Remaining seats</span>
                <span
                  className={[
                    "text-base font-medium",
                    remLoading
                      ? "text-gray-900"
                      : remError
                      ? "text-gray-900"
                      : (remainingSeats ?? 0) <= 2
                      ? "text-red-600"
                      : (remainingSeats ?? 0) <= 5
                      ? "text-amber-600"
                      : "text-gray-900",
                  ].join(" ")}
                >
                  {remLoading
                    ? "…"
                    : remError
                    ? "—"
                    : `${remainingSeats ?? 0} / ${capacity || "—"}`}
                </span>
              </div>

              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="block">
                  <span className="text-sm text-gray-700">Number of seats</span>
                  <input
                    type="number"
                    min={1}
                    className="mt-1 w-full rounded-lg border px-3 py-2"
                    value={nbSeats}
                    onChange={(e) => {
                      const v = Math.max(1, Number(e.target.value) || 1);
                      setDirty(true);
                      setNbSeats(v);
                    }}
                  />
                </label>

                <button
                  type="submit"
                  disabled={submitLoading}
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitLoading ? "Saving…" : myBooking?.id ? "Update booking" : "Create booking"}
                </button>
              </form>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
}
