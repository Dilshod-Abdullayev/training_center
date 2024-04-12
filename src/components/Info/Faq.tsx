"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';

interface FAQItem {
    question: string;
    answer: string;
    open: boolean;
}

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: "Gibrid ta’lim tizimi nima degani?",
            answer: "Mazkur ta’lim tizimining asosini har bir daraja va o’quv kursi uchun alohida onlayn platformadan foydalanish tashkil etadi.",
            open: false
        },
        {
            question: "Ingliz tili kurslariga necha yoshdan ariza topshirish mumkin?",
            answer: "Minimal yosh – 13. Shu bilan birga, barcha voyaga yetmaganlar uchun ularning ota-onalari yoki vasiylar to’g’risida ma’lumot taqdim etilishi shart. Ingliz tili o’quv kursi to’lovlari va imtihonlarni topshirish.",
            open: false
        },
        {
            question: "Bepul xizmatlardan qanday foydalanish mumkin?",
            answer: "Bepul sinov darsiga barcha xohlovchilar qatnashishlari mumkin. Buning uchun mazkur sahifaning yuqori qismidagi formadan foydalangan holda ro’yxatdan o’tish kifoya. Bepul co-working, qo’shimcha o’qituvchi bilan darslar.",
            open: false
        }
    ]);

    const toggleFAQ = (index: number) => {
        const newFaqs = faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, open: !faq.open };
            } else {
                return { ...faq, open: false };
            }
        });
        setFaqs(newFaqs);
    };

    return (
        <div>
            <h1 style={{ backgroundColor: '#FDCB00' }} className='w-full p-12 rounded-2xl text-2xl text-white font-extrabold h-auto'><span className='text-sky-500'>FAQ</span>:o'quv markaziga ta'lim bo'yicha beriladigan eng ommabop savollar</h1>
            <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="my-8">
                        <motion.div
                            className="flex justify-between items-center text-xl select-none text-sky-500 font-extrabold text-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="">{faq.question}</h2>
                            {faq.open ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                        </motion.div>
                        <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: faq.open ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-700 text-base leading-7 font-medium">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
                <div className="flex items-center justify-center mt-8">
                    <FaQuestionCircle className="text-sky-500 text-5xl" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
