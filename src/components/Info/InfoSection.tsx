import React from 'react'

export default function InfoSection() {
    return (
        <div style={{ backgroundColor: '#FDCB00', borderRadius: '50px' }} className='px-12  w-full mt-24  flex items-center justify-between '>
            <div className='w-1/2 flex flex-col items-center pt-14'>
                <h1 className='text-white  text-left font-extrabold text-5xl w-full'>Bizdagi gibrid <br /> o’qitish tizimi</h1>
                <p className='text-white text-2xl mt-4 leading-10 font-bold w-full'>Tezroq va yaxshiroq o'rganishni rag'batlantirish uchun har bir darajadagi talabalar uchun moslashtirilgan onlayn platforma</p>
                <div className='w-full flex gap-4'>
                    <button className='bg-sky-500 mt-12 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' >Explore</button>
                    <button className='bg-sky-500 mt-12 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' >Explore</button>
                </div>
            </div>
            <img src='https://cambridgeonline.uz/_nuxt/img/Rectangle%20(1).6c73da8.png' className='w-1/2' />
        </div>
    )
}
