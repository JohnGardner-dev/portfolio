import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
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
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
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
                            src="https://media.istockphoto.com/id/1178946251/vector/responsive-website-design-with-desktop-computer-screen-mobile-phone-and-tablet-pc-vector.webp?s=2048x2048&w=is&k=20&c=Q8Ly2qqQQ8ASArLzX--j5flbhxObEEP3CecKoa8FFUY=" alt=""
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span> UPS Clone
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Ea proident in velit reprehenderit esse proident labore incididunt. Fugiat deserunt nulla duis deserunt ex occaecat irure. Labore reprehenderit amet voluptate non labore cillum velit magna. Ad incididunt non est nulla sunt voluptate cillum. Sint reprehenderit culpa culpa Lorem sint duis. Anim velit reprehenderit veniam exercitation officia magna.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects