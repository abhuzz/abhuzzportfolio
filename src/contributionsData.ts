// Contribution Item Interface
export interface ContributionItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageUrl: string;
  redirectionLinks: string[]; // Supports multiple links
}

// ============================================================
// 📝 HOW TO ADD A NEW CONTRIBUTION:
// Simply add a new object at the TOP of this array (newest first).
// The listing page will automatically paginate with 10 items/page.
// ============================================================

export const contributions: ContributionItem[] = [
  {
    id: 5,
    title: "Hello, SwiftUI",
    subtitle: "Get to know Xcode, Swift, and SwiftUI",
    date: "March 24, 2026",
    description:
      "You will build Chat Prototype, a chat conversation using text views. The text and colors in the project are just suggestions, so feel free to make it your own by changing the words and style.",
    imageUrl: "swiftui-256x256_2x.png",
    redirectionLinks: [
      "https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui",
    ],
  },
  {
    id: 4,
    title: "Flutter Learning Resources",
    subtitle: "A catalog of tutorials, samples, and workshops",
    date: "March 24, 2026",
    description:
      "An extensive collection of curated learning materials including guided Codelabs, feature-rich demo applications, instructor-led workshops, and quick-solution recipes for common development challenges.",
    imageUrl: "Flutter_learning_resources_dashatar.png",
    redirectionLinks: [
      "https://docs.flutter.dev/learn/learning-resources",
    ],
  },
  {
    id: 3,
    title: "Take Kotlin Tour",
    subtitle:
      "Kotlin is a modern language that's concise, multiplatform, and interoperable with Java and other languages.",
    date: "March 24, 2026",
    description:
      "Understand the fundamentals of Kotlin and Jetpack Compose, Build basic Android apps, Use Jetpack libraries and modern Android development practices, Create adaptive layouts optimized for different display sizes",
    imageUrl: "Kotlin_Icon.png",
    redirectionLinks: [
      "https://developer.android.com/courses/android-basics-compose/course",
      "https://kotlinlang.org/docs/getting-started.html",
    ],
  },
  {
    id: 2,
    title: "Flutter Tutorial",
    subtitle: "Build pixel-perfect applications from scratch",
    date: "March 24, 2026",
    description:
      "A comprehensive guide to building Flutter apps for mobile, desktop, and web. Starting from a blank canvas, you'll build several small applications to master critical framework features. Note: Requires a Flutter environment and basic Dart knowledge.",
    imageUrl: "Flutter_tutorial.png",
    redirectionLinks: [
      "https://docs.flutter.dev/learn/pathway/tutorial",
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
    ],
  },
  {
    id: 1,
    title: "A Swift Tour",
    subtitle: "Explore the features and syntax of Swift",
    date: "March 24, 2026",
    description:
      "Get started with Apple's powerful and intuitive programming language. This guide provides a comprehensive overview of Swift's core features, from simple values and control flow to functions, closures, and object-oriented patterns. Perfect for developers looking to master the fundamentals of pure Swift through practical, hands-on examples.",
    imageUrl: "swift-256x256_2x.png",
    redirectionLinks: [
      "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/",
    ],
  },
];
