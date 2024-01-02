import About from '@/components/About'
import Hero from '@/components/Hero' // component
import Services from '@/components/services'
import Image from 'next/image'

import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <Hero />
      <About />
      <Services />
    </div>
  )
}