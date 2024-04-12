"use client"
import React, { useState } from 'react';

export default function InfoStudent() {
    const [tab, setTab] = useState('py');

    const renderContent = () => {
        switch (tab) {
            case 'py':
                return <p>Python content goes here</p>;
            case 'js':
                return <p>JavaScript content goes here</p>;
            case 'php':
                return <p>PHP content goes here</p>;
            case 'java':
                return <p>Java content goes here</p>;
            default:
                return null;
        }
    };

    return (
        <div className='mt-16 flex flex-col items-center'>
            <h1 className='text-4xl text-sky-500 font-extrabold text-center'>Bizning o’quvchilarimiz</h1>
            <p className='text-slate-800 text-2xl text-center mt-4 font-medium leading-10'>Bizning o’quvchilarimiz quyidagi yutuqlarga erishgan</p>
            <div className='flex gap-5 mt-12'>
                <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${tab === 'py' ? 'from-cyan-500 to-blue-500' : 'from-gray-300 to-gray-500'} group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`} onClick={() => setTab('py')}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        PY
                    </span>
                </button>
                <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${tab === 'js' ? 'from-cyan-500 to-blue-500' : 'from-gray-300 to-gray-500'} group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`} onClick={() => setTab('js')}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        JS
                    </span>
                </button>
                <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${tab === 'php' ? 'from-cyan-500 to-blue-500' : 'from-gray-300 to-gray-500'} group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`} onClick={() => setTab('php')}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        PHP
                    </span>
                </button>
                <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${tab === 'java' ? 'from-cyan-500 to-blue-500' : 'from-gray-300 to-gray-500'} group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`} onClick={() => setTab('java')}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        JAVA
                    </span>
                </button>
            </div>
            {renderContent()}
        </div>
    );
}
