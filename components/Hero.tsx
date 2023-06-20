import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import useDownloader from 'react-use-downloader'

type Props = {}

function Hero({ }: Props) {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader()
    const fileUrl = "/John-Gardner-Resume.pdf"
    const fileName = "John-Gardner-Resume.pdf"
    const [text, count] = useTypewriter({
        words: ["Hey there, I'm John!", "Developer...", "Creator...", "Maker..."],
        loop: true,
        delaySpeed: 2000,
    })
    const handleAboutScroll = () => {
        const element = document.getElementById('about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleExperienceScroll = () => {
        const element = document.getElementById('experience')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleSkillsScroll = () => {
        const element = document.getElementById('skills')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleProjectsScroll = () => {
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className='h-screen flex flex-col space-y-10 sm:space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-fill h-32 w-32 mx-auto object-cover'
                src='/PFPnobg.png' alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-semibold'>Software Engineer</h2>
                <h1 className='text-2xl sm:text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
            </div>
            <div className='z-20 sm:flex'>
                <div>
                    <button className='heroButton' onClick={handleAboutScroll}>About</button>
                </div>
                <div>
                    <button className='heroButton' onClick={handleExperienceScroll}>Experience</button>
                </div>
                <div>
                    <button className='heroButton' onClick={handleSkillsScroll}>Skills</button>
                </div>
                <div>
                    <button className='heroButton' onClick={handleProjectsScroll}>Projects</button>
                </div>
                {/* NEED TO ADD PROJECTS BACK */}
                {/* <Link href='#Projects'>
                        <button className='heroButton'>Projects</button>
                    </Link> */}
            </div>
            <div className='sm:flex z-20 '>
                <div>
                    <button className='downloadButton' onClick={() => download(fileUrl, fileName)}>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero