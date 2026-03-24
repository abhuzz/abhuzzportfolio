// Contribution Item Interface
export interface ContributionItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageUrl: string;
  redirectionLink: string;
}

// ============================================================
// 📝 HOW TO ADD A NEW CONTRIBUTION:
// Simply add a new object at the TOP of this array (newest first).
// The listing page will automatically paginate with 10 items/page.
// ============================================================

export const contributions: ContributionItem[] = [
  {
    id: 1,
    title: "A Swift Tour",
    subtitle: "Explore the features and syntax of Swift",
    date: "March 24, 2026",
    description:
      "Get started with Apple's powerful and intuitive programming language. This guide provides a comprehensive overview of Swift's core features, from simple values and control flow to functions, closures, and object-oriented patterns. Perfect for developers looking to master the fundamentals of pure Swift through practical, hands-on examples.",
    imageUrl: "swift-256x256_2x.png",
    redirectionLink:
      "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/",
  },
];
