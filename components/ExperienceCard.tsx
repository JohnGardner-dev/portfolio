import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="https://lh6.googleusercontent.com/-hyk798-S61A/AAAAAAAAAAI/AAAAAAAAAAA/7FnL0GKI_Ow/s44-p-k-no-ns-nd/photo.jpg" alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Job Title</h4>
                <p className='font-bold text-2xl mt-1'>Company</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10'
                        src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'
                        alt=''
                    />
                    <img
                        className='h-10 w-10'
                        src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'
                        alt=''
                    />
                    <img
                        className='h-10 w-10'
                        src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png'
                        alt=''
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>Jan 2020 - Current</p>
                <ul className='list-disc space-y-4 ml-5 text-base'>
                    <li>Duis cupidatat sit duis nulla minim et.Aliqua laboris magna incididunt est commodo aliquip aute id irure adipisicing sit consectetur.</li>
                    <li>Eiusmod sint labore sit aliquip do nisi cupidatat nulla ipsum magna ad qui ipsum.Fugiat est cupidatat dolore ex.</li>
                    <li>Consequat consectetur cillum Lorem ad culpa labore fugiat culpa consequat ad consectetur.Velit nisi ullamco in enim in culpa veniam sunt consectetur esse occaecat Lorem.</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard