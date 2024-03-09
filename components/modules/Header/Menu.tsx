'use client'

import Logo from '@/components/elements/Logo'
import { useState } from 'react'
import useLang from '@/hooks/useLang'
import { useUnit } from 'effector-react'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { setLang } from '@/context/lang'
import { AllowedLangs } from '@/constants/lang'
import { AnimatePresence, motion } from 'framer-motion'
import Accordion from '../Accordion/Accordion'
import { usePathname } from 'next/navigation'
import MenuLinkItem from './MenuLinkItem'

const Menu = () => {
  const [showCatalog, setShowCatalog] = useState(false)
  const [showCastomer, setShowCastomer] = useState(false)
  const [showKontakt, setShowKontakt] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, transitions } = useLang()
  const pathname = usePathname()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleShowCatalogList = () => {
    setShowCatalog(true)
    setShowCastomer(false)
    setShowKontakt(false)
  }

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  const handleRedirectToCatalog = (path: string) => {
    if (pathname.includes('catalog')) {
      window.history.pushState({ path }, '', path)
      window.location.reload()
    }
    handleCloseMenu()
  }

  const clothLinks = [
    {
      id: 1,
      text: transitions[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: transitions[lang].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: transitions[lang].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: transitions[lang].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: transitions[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: transitions[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: transitions[lang].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: transitions[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: transitions[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: transitions[lang].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: transitions[lang].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]
  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <div className='container nav-menu__container'>
        <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
          <Logo />
        </div>
        <img
          className={`nav-menu__bg ${menuIsOpen ? 'open ' : ''}`}
          src='/img/menu-bg.png'
          alt='bg'
        />
        <button
          className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
          onClick={handleCloseMenu}
        />
        <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
        <ul
          onMouseLeave={() => setShowCatalog(false)}
          className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}
        >
          <li className='nav-menu__list__item'>
            <button
              onMouseEnter={handleShowCatalogList}
              className={`btn-reset nav-menu__list__item__btn`}
            >
              {transitions[lang].main_menu.catalog}
            </button>
            <AnimatePresence>
              {showCatalog && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='list-reset nav-menu__accordion'
                >
                  <li className='nav-menu__accordion__item'>
                    <Accordion
                      title={transitions[lang].main_menu.cloth}
                      titleClass='btn-reset nav-menu__accordion__item__title'
                    >
                      <ul className='list-reset nav-menu__accordion__item__list'>
                        {clothLinks.map((item) => (
                          <MenuLinkItem
                            key={item.id}
                            item={item}
                            handleRedirectToCatalog={handleRedirectToCatalog}
                          />
                        ))}
                      </ul>
                    </Accordion>
                  </li>

                  <li className='nav-menu__accordion__item'>
                    <Accordion
                      title={transitions[lang].main_menu.accessories}
                      titleClass='btn-reset nav-menu__accordion__item__title'
                    >
                      <ul className='list-reset nav-menu__accordion__item__list'>
                        {accessoriesLinks.map((item) => (
                          <MenuLinkItem
                            key={item.id}
                            item={item}
                            handleRedirectToCatalog={handleRedirectToCatalog}
                          />
                        ))}
                      </ul>
                    </Accordion>
                  </li>

                  <li className='nav-menu__accordion__item'>
                    <Accordion
                      title={transitions[lang].main_menu.souvenirs}
                      titleClass='btn-reset nav-menu__accordion__item__title'
                    >
                      <ul className='list-reset nav-menu__accordion__item__list'>
                        {souvenirsLinks.map((item) => (
                          <MenuLinkItem
                            key={item.id}
                            item={item}
                            handleRedirectToCatalog={handleRedirectToCatalog}
                          />
                        ))}
                      </ul>
                    </Accordion>
                  </li>

                  <li className='nav-menu__accordion__item'>
                    <Accordion
                      title={transitions[lang].main_menu.office}
                      titleClass='btn-reset nav-menu__accordion__item__title'
                    >
                      <ul className='list-reset nav-menu__accordion__item__list'>
                        {officeLinks.map((item) => (
                          <MenuLinkItem
                            key={item.id}
                            item={item}
                            handleRedirectToCatalog={handleRedirectToCatalog}
                          />
                        ))}
                      </ul>
                    </Accordion>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className='nav-menu__list__item'>
            <button className={`btn-reset nav-menu__list__item__btn`}>
              {transitions[lang].main_menu.catalog}
            </button>
          </li>
          <li className='nav-menu__list__item'>
            <button className={`btn-reset nav-menu__list__item__btn`}>
              {transitions[lang].main_menu.contacts}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu
