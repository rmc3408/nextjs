import Header from "@components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h1 style={{ color: 'white', textAlign: 'center' }}>Time to get started!</h1>
      <Link href="/new">New Page</Link>
      <Link href="/blog/36">Post 36</Link>
    </main>
  )
}
