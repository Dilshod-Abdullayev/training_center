import React from 'react';
import { items } from '@/data/Data';
import Link from 'next/link';

export default function Items() {
  return (
    <ul className='flex flex-col lg:flex-row gap-5 lg:gap-8 lg:ml-auto'>
      {items.map((item) => (
        <Link
          className='text-xl flex py-2 lg:py-6 lg:px-0 text-dark dark:text-white group-hover:opacity-70'
          href={item.path}
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
