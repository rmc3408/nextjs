import Header from "@components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/new">New Page</Link>
      <Link href="/blog/36">Blog Post dynamic page</Link>
    </main>
  )
}
