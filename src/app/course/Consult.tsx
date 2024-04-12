import React from 'react'
import { IoIosSend } from "react-icons/io";

export default function Consult() {
    return (
        <div className="mx-14 w-1/2 mt-10 border-2 border-sky-500 rounded-lg">
            <h1 className='font-extrabold text-sky-500 text-center text-2xl w-full'>Kurs bo‘yicha bepul maslahat oling!</h1>
            <div className="p-8">
                <div className="flex gap-4">
                    <input type="Name" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Ismingiz*" />
                </div>
                <div className="my-6 flex gap-4">
                    <select name="select" id="select" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                        <option className="font-semibold text-slate-300">IT</option>
                        <option className="font-semibold text-slate-300">English</option>

                    </select>
                </div>
                <div className="">
                    <textarea name="textarea" id="text" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
                </div>
                <div className="flex justify-center">
                    <button className='bg-sky-500  flex items-center hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' >Batafsil <IoIosSend /></button>
                </div>
            </div>
        </div>
    )
}
