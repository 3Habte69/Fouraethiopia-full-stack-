import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Fouraethiopia",
  description: "University exams, quizzes, and leaderboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="p-4 shadow bg-white flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/exams">Exams</Link>
          <Link href="/browse">Browse</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/auth">Login</Link>
        </nav>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
