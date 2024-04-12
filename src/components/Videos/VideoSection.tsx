"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export default function VideoSection() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='flex justify-between flex-wrap mt-20'>
            <div style={{ backgroundSize: 'cover', backgroundImage: "url('https://www.pngitem.com/pimgs/m/314-3144082_school-cartoon-teacher-hd-png-download.png')" }} className='border-4 rounded-2xl w-2/5 h-72 bg-cover flex justify-center items-center hover:bg-opacity-80 transition-opacity duration-300 ease-in-out'>
                <button className='bg-sky-500 mt-12 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' onClick={() => setOpen(true)}>Explore</button>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    loop="1"
                    isOpen={isOpen}
                    videoId="10FNqoPpNbE"
                    onClose={() => setOpen(false)}
                />
            </div>
            <div style={{ backgroundSize: 'cover', backgroundImage: "url('https://www.kindpng.com/picc/m/74-744591_student-education-welcome-teacher-cartoon-images-hd-hd.png')" }} className='border-4 rounded-2xl w-2/5 h-72 bg-cover flex justify-center items-center hover:bg-opacity-80 transition-opacity duration-300 ease-in-out'>
                <button className='bg-sky-500 mt-12 w-32 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' onClick={() => setOpen(true)}>Explore</button>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    loop="1"
                    isOpen={isOpen}
                    videoId="10FNqoPpNbE"
                    onClose={() => setOpen(false)}
                />
            </div>
        </div>
    )
}
