import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/lib/constants'
import Link from 'next/link'

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky p-10 flex flex-col dap-16 bg-blue-2 shadow-xl max-lg:hidden'>
        <Image src='/logo.png' alt='logo' width={150} height={150}/>

        <div className='flex flex-col gap-12'>
            {navLinks.map((link) => (
                <Link href={link.url} key={link.label} className='flex gap-4 text-body-medium'>{link.icon} <p>{link.label}</p></Link>
            ))}
        </div>
        </div>
  )
}

export default LeftSideBar