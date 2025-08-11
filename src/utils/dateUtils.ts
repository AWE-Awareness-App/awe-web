export function isDateBeforeNow(input: string | Date): boolean {
    const d = new Date(input);
    if (isNaN(d.getTime())) return false;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    return start < today;
}