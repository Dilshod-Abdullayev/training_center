import React from 'react'
import img1 from '@/image/bag.png'
import img2 from '@/image/cap.png'
import img3 from '@/image/clock.png'
import img4 from '@/image/youtube.png'
import Image from 'next/image'

export default function Statistics() {
    return (
        <div className='flex mt-12 flex-col items-center'>
            <h1 className='text-center text-2xl text-amber-600 font-bold'> <span className='text-sky-500'>All-In-One</span> Cloud Software.</h1>
            <p className='w-2/5 mt-6 text-center text-lg text-slate-800 font-medium'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
            <div className='w-full  mt-24 flex justify-between items-center flex-wrap'>
            <div className='w-72 hover:bg-slate-200 text-slate-800 hover:text-sky-500 cursor-pointer flex flex-col items-center  h-auto'>
                    <Image className='w-1/4' src={img3} alt="as" />
                    <h1 className='text-2xl font-extrabold text-sky-900'>+80k hours of course</h1>
                    <p className='text-center mt-4 text-base leading-7 font-medium'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices</p>
                </div>
                <div className='w-72 hover:bg-slate-200 text-slate-800 hover:text-sky-500 cursor-pointer flex flex-col items-center  h-auto'>
                    <Image className='w-1/3' src={img4} alt="as" />
                    <h1 className='text-2xl font-extrabold text-sky-900'>+60 webinars</h1>
                    <p className='text-center mt-4 text-base leading-7  font-medium'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices</p>
                </div>
                <div className='w-72 hover:bg-slate-200 text-slate-800 hover:text-sky-500 cursor-pointer flex flex-col items-center  h-auto'>
                    <Image className='w-1/3' src={img2} alt="as" />
                    <h1 className='text-2xl font-extrabold text-sky-900'>+4,000 students</h1>
                    <p className='text-center mt-4 text-base leading-7  font-medium'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices</p>
                </div>
                <div className='w-72 hover:bg-slate-200 text-slate-800 hover:text-sky-500 cursor-pointer flex flex-col items-center  h-auto'>
                    <Image className='w-1/5 ' src={img1} alt="as" />
                    <h1 className='text-2xl font-extrabold text-sky-900'>+100 teachers</h1>
                    <p className='text-center mt-4 text-base leading-7 font-medium'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices</p>
                </div>
            </div>
        </div>
    )
}
