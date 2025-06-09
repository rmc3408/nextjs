import logo from '@/assets/logo.png'
import Link from 'next/link'
import style from './main-header.module.css'
import Image from 'next/image'
import MainLink from './main-link'

function Header() {
  console.log('SSR Header component rendered');

  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>
        <Image src={logo.src} width="120" height="120" priority alt="mela-header-logo" />
        <h2>Section 3</h2>
      </Link>

      <nav className={style.nav}>
        <ul>
          <MainLink href="/meals">Browse Meals</MainLink>
          <MainLink href="/community">Community</MainLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
