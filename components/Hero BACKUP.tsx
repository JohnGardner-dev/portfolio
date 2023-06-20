import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hey there, I'm John!", "Developer...", "Creator...", "Maker..."],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-fill h-32 w-32 mx-auto object-cover'
                src='https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/267775502_5396695460346559_3265707712776608123_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CzkViN3iyGAAX_N8Gbe&_nc_ht=scontent-dfw5-1.xx&oh=00_AfD9LO9BFbBwyiuBAVBaGAt8ck7breh8EpvWaBjAvyHJQg&oe=647B4160' alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-semibold'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    {/* NEED TO ADD PROJECTS BACK */}
                    {/* <Link href='#Projects'>
                        <button className='heroButton'>Projects</button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Hero