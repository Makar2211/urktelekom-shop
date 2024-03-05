import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => (
  <Link href='/'>
    <Image src='/img/Logo.svg' width={187} height={59} alt='Logo' />
  </Link>
)

export default Logo
