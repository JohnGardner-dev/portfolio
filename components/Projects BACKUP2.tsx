import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function Projects({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3
                className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'
            >
                PROJECTS
            </h3>
            <div className='w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>

                {/* DirectRep */}
                <article
                    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
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
                        className='object-center w-112 h-32 xl:w-[700px] xl:h-[200px]'
                        src="/directrep.png" alt=""
                    />

                    <div className='px-5 md:px-10'>
                        <h4 className='text-4xl font-bold text-center mb-6'>DirectRep</h4>
                        <div className='grid grid-cols-6 gap-5 mt-3'>
                            <img
                                className='h-15 w-auto'
                                src='/JavaScript.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/React.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/Python.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/FastAPI.svg'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto ml-2'
                                src='/Docker.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/PostgreSQL.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/html5.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/CSS.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/Bootstrap.png'
                                alt=''
                            />
                        </div>
                        <p className='list-disc space-y-4 ml-5 py-5 text-lg'>
                            DirectRep is an app that aims to increase representation of citizens of the US by allowing them to find their elected officials and write them letters on a given topic and leveraging a Large Language Model to generate the body text.
                        </p>
                    </div>
                </article>
                <article
                    className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
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
                        className='object-center w-112 h-32 xl:w-auto xl:h-[200px]'
                        src="/Portfolio.png" alt=""
                    />

                    <div className='px-5 md:px-10'>
                        <h4 className='text-4xl font-bold text-center mb-6'>Portfolio Site</h4>
                        <div className='grid grid-cols-6 gap-5 mt-3'>
                            <img
                                className='h-15 w-auto'
                                src='/TypeScript.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/JavaScript.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/React.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/Next.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/CSS.png'
                                alt=''
                            />
                            <img
                                className='h-15 w-auto'
                                src='/Tailwind.png'
                                alt=''
                            />
                        </div>
                        <p className='list-disc space-y-4 ml-5 py-5 text-lg'>
                            This is where you are now! Working on this portfolio site was a lot of fun and a huge learning experience. I really enjoyed learning Tailwind CSS and using TypeScript for the first time.
                        </p>
                    </div>
                </article>
            </div>

        </motion.div>
    )
}

export default Projects