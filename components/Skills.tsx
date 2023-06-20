import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Image from 'next/image'

type Props = {}

function Skills({ }: Props) {
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
            className='flex relative flex-col text-center xl:flew-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        >
            <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10'>
                skills
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                {/* TypeScript */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/TypeScript.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto'
                    />
                </div>
                {/* JavaScript */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/JavaScript.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* React */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='React.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Next JS */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/Next.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Python */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/Python.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Fast API */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/FastAPI.svg'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Django */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/Django.svg'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Docker */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/docker.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* HTML5 */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/html5.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* CSS3 */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/CSS.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Bootstrap CSS */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/Bootstrap.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* Tailwind CSS */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/Tailwind.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* MaterialUI CSS */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/MaterialUI.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* SQL */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/SQL.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
                {/* PostgreSQL */}
                <div className='group relative flex'>
                    <motion.img
                        initial={{
                            x: 200,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        src='/PostgreSQL.png'
                        className='h-20 w-auto md:h-28 md:w-auto xl:h-32 xl:w-auto' />
                </div>
            </div>
        </motion.div>
    )
}
// 
export default Skills