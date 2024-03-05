'use client'
import { useUnit } from 'effector-react'
import { $lang } from '@/context/lang'
import transitionsJson from '@/public/translations/translations.json'

const useLang = () => {
  const lang = useUnit($lang)
  const transitions = transitionsJson
  return { lang, transitions }
}

export default useLang
