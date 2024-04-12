import React from 'react'
import { PiStudentFill } from "react-icons/pi";

export default function Logo() {
  return (
    <h1 className='text-3xl flex items-center text-slate-950 font-extrabold cursor-pointer'>
      <PiStudentFill /> Learn<span className='flex text-sky-500'>Now
      </span>
    </h1>
  )
}
