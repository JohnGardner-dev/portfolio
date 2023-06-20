import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({ }: Props) {
    const handleContactScroll = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <header
            className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'
        >
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.2
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.25
                }}
                className='flex flex-row items-center'
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/0xjohngardner/"
                    fgColor='gray'
                    bgColor='transparent'
                    // className='hover:border-b-[#0072b1]'
                    className='hover:border-b-2 border-[#0072b1]'
                />
                <SocialIcon
                    url='https://gitlab.com/John.Gardner'
                    fgColor='gray'
                    bgColor='transparent'
                    className='hover:border-b-2 border-[#fca326]'
                />
            </motion.div>

            <div onClick={handleContactScroll} className='hover:border-b-2 border-[#F7AB0A]'>
                <motion.div
                    className='flex flex-row items-center text-gray-300 cursor-pointer'
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.2
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.25
                    }}
                >
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <div className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</div>
                </motion.div>
            </div>
        </header>
    )
}

export default Header