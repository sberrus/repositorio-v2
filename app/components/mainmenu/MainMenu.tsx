// imports
import React from 'react'

// style
import style from './mainmenu.module.scss'
import Container from '../container/Container'
import Link from 'next/link'

const MainMenu = () => {
  return (
    <div className={style.mainMenu}>
      <Container>
        <header className={style.header}>
          <div className={style.section}>[logo]</div>
          <div className={style.section}>
            <nav className={style.navbar}>
              <ul className={style.navList}>
                <li className={style.navItem}>
                  <Link href='#' className={style.link}>
                    Item 1
                  </Link>
                </li>
                <li className={style.navItem}>
                  <Link href='#' className={style.link}>
                    Item 2
                  </Link>
                </li>
                <li className={style.navItem}>
                  <Link href='#' className={style.link}>
                    Item 3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.section}>
            <button className={style.CTA}>Contact</button>
          </div>
        </header>
      </Container>
    </div>
  )
}

export default MainMenu
