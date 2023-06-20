import React from 'react'
import { motion } from 'framer-motion'

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
            className='h-screen flex overflow-hidden flex-col text-left max-w-full px-10 justify-center mx-auto items-center'>
            <h3 className='mt-16 md:mt-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='w-full flex overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] space-x-10'>

                {/* DirectRep */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
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
                        className='w-auto h-28 md:h-32 rounded-md xl:w-auto xl:h-[150px] object-cover object-center'
                        src="/directrep.png" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl md:text-3xl lg:text-4xl font-semibold tracking-wider mt-6 text-center'>DirectRep</h4>
                        <div className='grid grid-cols-6 gap-5 mt-3'>
                            <img
                                className='h-12 w-auto'
                                src='/JavaScript.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/React.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/Python.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/FastAPI.svg'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto ml-2'
                                src='/Docker.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/PostgreSQL.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/html5.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/CSS.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/Bootstrap.png'
                                alt=''
                            />
                        </div>
                        <p className='list-disc ml-5 text-sm'>DirectRep is an app that aims to increase representation of citizens of the US by allowing them to find their elected officials and write them letters on a given topic and leveraging a Large Language Model to generate the body text.</p>
                    </div>
                </article>

                {/* Portfolio Site */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
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
                        className='w-auto h-28 md:h-32 rounded-md xl:w-auto xl:h-[150px] object-cover object-center'
                        src="/Portfolio.png" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl md:text-3xl lg:text-4xl font-semibold tracking-wider mt-6 text-center'>Portfolio Site</h4>
                        <div className='grid grid-cols-6 gap-5 mt-3'>
                            <img
                                className='h-12 w-auto'
                                src='/TypeScript.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/JavaScript.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/React.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/Next.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/CSS.png'
                                alt=''
                            />
                            <img
                                className='h-12 w-auto'
                                src='/Tailwind.png'
                                alt=''
                            />
                        </div>
                        <p className='list-disc ml-5 text-sm'>This is where you are now! Working on this portfolio site was a lot of fun and a huge learning experience. I really enjoyed learning Tailwind CSS and using TypeScript for the first time.</p>
                    </div>
                </article>
            </div>

        </motion.div>
    )
}

export default Projects