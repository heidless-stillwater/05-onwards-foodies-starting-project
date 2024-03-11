import Link from "next/link"

import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
  return <header className={classes.header}>
    <Link href='/' className={classes.logo}>
      <img src={logoImg.src} alt='a plate with foo on it' />
      NextLevel Food
    </Link>

    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href='/meals'>Browse Meals</Link>
          <Link href='/community'>Communty</Link>
        </li>
      </ul>
    </nav>

  </header>
}