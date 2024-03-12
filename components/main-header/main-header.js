
import Link from "next/link"
import NavLink from "./nav-link";

import MainHeaderBackground from '@/components/main-header/main-header-background';


import logoImg from '@/assets/logo.png'
import classes from '@/components/main-header/main-header.module.css'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <img src={logoImg.src} alt='a plate with foo on it' />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href='/community'>
                Community
              </NavLink>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}