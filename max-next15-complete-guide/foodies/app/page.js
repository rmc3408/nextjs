import Header from '@components/header'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <h1 style={{ color: 'white', textAlign: 'center' }}>Time to get prep a meal!</h1>
      <p>
        <Link href="/meals">Meals Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Meals Share Page</Link>
      </p>
      <p>
        <Link href="/meal/30">Meal number 30 Page</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  )
}
