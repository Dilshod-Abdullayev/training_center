"use client"
import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/swiperCourse.css'
import { GrTechnology } from "react-icons/gr";
import Consult from './Consult';
import Image from 'next/image';

export default function page() {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-extrabold text-sky-500 text-center text-5xl w-full'>Barcha kurslar </h1>
            <div className='mt-12 w-full'>
                <span className='text-white flex gap-3 w-40 justify-center items-center bg-slate-500 p-4 rounded-2xl font-extrabold'>IT courses <GrTechnology />
                </span>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-12"
                >
                    <SwiperSlide>
                        <div className="relative flex flex-col items-start mt-6 bg-sky-100 text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <Image
                                   width={500}
                                   height={500}
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                    Barcelona.
                                </p>
                                <div className='w-3/4 max-sm:w-full pt-2 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Kurs narxi:</h1>
                                        <p className='max-[350px]:text-sm'>900 000 so‘m</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Davomiyligi:</h1>
                                        <p className='max-[350px]:text-sm'>6 oy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <button className='bg-sky-500 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>Yuborish</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col items-start mt-6 bg-sky-100 text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <Image
                                   width={500}
                                   height={500}
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                    Barcelona.
                                </p>
                                <div className='w-3/4 max-sm:w-full pt-2 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Kurs narxi:</h1>
                                        <p className='max-[350px]:text-sm'>900 000 so‘m</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Davomiyligi:</h1>
                                        <p className='max-[350px]:text-sm'>6 oy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <button className='bg-sky-500 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>Yuborish</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col items-start mt-6 bg-sky-100 text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <Image
                                   width={500}
                                   height={500}
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                    Barcelona.
                                </p>
                                <div className='w-3/4 max-sm:w-full pt-2 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Kurs narxi:</h1>
                                        <p className='max-[350px]:text-sm'>900 000 so‘m</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Davomiyligi:</h1>
                                        <p className='max-[350px]:text-sm'>6 oy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <button className='bg-sky-500 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>Yuborish</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative flex flex-col items-start mt-6 bg-sky-100 text-gray-700 shadow-md bg-clip-border rounded-xl w-96">
                            <div
                                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <Image
                                width={500}
                                height={500}
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                    alt="card-image" />
                            </div>
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h5>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                                    Barcelona.
                                </p>
                                <div className='w-3/4 max-sm:w-full pt-2 flex justify-between items-center'>
                                    <div>
                                        <h1 className='font-bold'>Kurs narxi:</h1>
                                        <p className='max-[350px]:text-sm'>900 000 so‘m</p>
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Davomiyligi:</h1>
                                        <p className='max-[350px]:text-sm'>6 oy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <button className='bg-sky-500 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>Yuborish</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
