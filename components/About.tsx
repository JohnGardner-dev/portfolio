import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
    const handleContactScroll = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
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
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:space-y-8'
        >
            <h3
                className='md:absolute md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'
            >
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true
                }}
                src='/primary.png'
                // className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                className='md:mb-0 flex-shrink-0 w-40 h-40 md:mt-10 rounded-full object-cover md:rounded-none md:w-64 md:h-auto xl:w-[300px] xl:h-auto'
            />
            <div
                className='space-y-6 px-0 md:px-10'
            >
                <h4
                    className='text-2xl lg:text-4xl font-semibold text-center'
                >
                    Here is a little info <span className='underline decoration-[#F7AB0A]/70'>about me</span>
                </h4>
                <p
                    className='text-sm'
                >
                    I'm a Software Engineer and I love making the world a more efficient and smooth-operating place to live and I'm currently looking for an opportunity to share my skills and perspective with an organization that will value them. Whether it's building front-end components to heighten user experience, managing back-end requests to maximize efficiency, or leveraging machine-learning and Large Language Models to maximize voter representation (see DirectRep project in resume), I can't wait to talk about how my abilities could align with your organizations needs.
                </p>
                <p className='text-md text-center'>
                    Please don't hesitate to <span className='underline decoration-[#F7AB0A]/50 text-[#F7AB0A] cursor-pointer' onClick={handleContactScroll}>drop me a line</span> and let's discuss! <br></br> I look forward to speaking together.
                </p>
            </div>
        </motion.div >
    )
}

export default About