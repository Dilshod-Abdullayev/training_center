import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
            className='w-full h-96 md:h-[550px] rounded-lg flex flex-col items-start pl-6 md:pl-10 pt-20 md:pt-24 mt-20 md:mt-36 bg-no-repeat bg-cover'
        >
            <h1 className='text-sky-500 font-extrabold text-2xl md:text-4xl'>
                Unlock your <span className='text-white'>learning</span> potential
            </h1>
            <p className='text-white text-lg md:text-xl w-full md:w-3/4 mt-8 md:mt-16 font-semibold'>
                Choose from thousands of courses and a vast collection of study materials to fuel your educational journey
            </p>
            <button className='bg-sky-500 mt-8 md:mt-12 w-28 md:w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>
                Explore
            </button>
        </div>
    );
}