import Hero from '@/components/Hero' // component
import Image from 'next/image'

import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <Hero />
    </div>
  )
}