import React from 'react'
import Socials from './Socials'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='bg-secondary pt-10 pb-4'>
      <div className='container mx-auto text-center'>
        {/* copyright */}
        <div className='text-muted-foreground'>Copyright &copy; Patyos. All rights reserved.</div>
      </div>
    </div>
  )
}