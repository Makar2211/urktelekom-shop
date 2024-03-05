'use client'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/components/elements/Logo'
import styles from './style.module.scss'
import { headerLinks } from '@/constants/header'
import useLang from '@/hooks/useLang'

const Header = () => {
  const { lang, transitions } = useLang()
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <button className={`btn-reset ${styles.headerBurger}`}>
          {transitions[lang].header.menu_btn}
        </button>
        <div className={styles.headerLogo}>
          <Logo />
        </div>

        <ul className={`link-reset ${styles.headerLinks}`}>
          <li>
            <button className={`btn-reset ${styles.img}`}>
              <Image
                alt='search'
                src='/img/Search.svg'
                width={24}
                height={24}
                className={styles.img}
              />
            </button>
          </li>
          {headerLinks.map((link) => (
            <li key={link.imageURL}>
              <Link href={link.url}>
                <Image
                  alt={link.alt}
                  src={link.imageURL}
                  width={25}
                  height={25}
                  className={styles.img}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
