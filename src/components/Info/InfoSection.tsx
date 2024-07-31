import Image from 'next/image';
import React from 'react';

export default function InfoSection() {
    return (
        <section
            style={{ backgroundColor: '#FDCB00', borderRadius: '50px' }}
            className='px-4 md:px-12 w-full mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-between'
        >
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start pt-8 md:pt-14 md:pr-8'>
                <h1 className='text-white text-center md:text-left font-extrabold text-3xl md:text-5xl w-full'>
                    Bizdagi gibrid <br /> o’qitish tizimi
                </h1>
                <p className='text-white text-lg md:text-2xl mt-4 md:mt-6 leading-7 md:leading-10 font-bold w-full md:w-4/5'>
                    Tezroq va yaxshiroq o&apos;rganishni rag&apos;batlantirish uchun har bir darajadagi talabalar uchun moslashtirilgan onlayn platforma
                </p>
                <div className='w-full flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12'>
                    <button className='bg-sky-500 w-full md:w-auto hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>
                        Explore
                    </button>
                    <button className='bg-sky-500 w-full md:w-auto hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0'>
                        Learn More
                    </button>
                </div>
            </div>
            <Image
                src='https://cambridgeonline.uz/_ipx/f_webp/images/books.png'
                className='w-full md:w-1/2 mt-8 md:mt-0'
                alt="Illustration of books"
                width={500}
                height={500}
            />
        </section>
    );
}