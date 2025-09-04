function makeCard(
  tag: string,
  title: string,
  price: string,
  description: string,
  benefit: string,
  buttonText: string,
  bgColor: string,
  buttonUrl: string
) {
  return { tag, title, price, description, benefit, buttonText, bgColor, buttonUrl };
}

export const programCards = [
  makeCard(
    "Free",
    "Free Reset",
    "$0",
    "25 minutes, live online. No camera, no talking. Just listen and follow along.",
    "Feel calmer, clearer, and more grounded in one session.",
    "Join Free Reset",
    "#e6f0fa",
    "https://book-free-reset.example.com"
  ),
  makeCard(
    "Subscription",
    "Starter Session",
    "$49/month",
    "Weekly guided resets to help you build a consistent habit of calm.",
    "Stay grounded with reminders and rotating themes.",
    "Join Starter Session",
    "#b8d1ea",
    "https://book-starter-session.example.com"
  ),
  makeCard(
    "Package",
    "Reset Bundle",
    "$149",
    "Three guided sessions plus a personal welcome call.",
    "Try a short arc that helps you notice real change.",
    "Join Reset Bundle",
    "#faeedc",
    "https://book-reset-bundle.example.com"
  ),
  makeCard(
    "Personalized",
    "Foundations",
    "$299",
    "A private consultation plus one month of guided resets.",
    "Understand your nervous system and start building resilience.",
    "Join Foundations",
    "#cbe7d6",
    "https://book-foundations.example.com"
  ),
];

export { makeCard };
