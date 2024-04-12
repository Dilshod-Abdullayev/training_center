import React from 'react'
import { items } from '@/data/Data'
import Link from 'next/link'
export default function Items() {
  return (
    <ul className='flex gap-5'>
      {
        items.map((item) => (
          <Link className='text-xl flex py-2 ml-8  text-dark group-hover:opacity-70  dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0' href={item.path} key={item.id}>{item.title}</Link>
        ))
      }
    </ul>
  )
}