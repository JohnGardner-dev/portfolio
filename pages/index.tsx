import About from '@component/components/About'
import Header from '@component/components/Header'
import Hero from '@component/components/Hero'
import WorkExperience from '@component/components/WorkExperience'
import Skills from '@component/components/Skills'
import { NextPage } from 'next'
import Head from 'next/head'
import Projects from '@component/components/Projects'
import ContactMe from '@component/components/ContactMe'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { Analytics } from '@vercel/analytics/react'

const Home: NextPage = () => {
  const handleHeroScroll = () => {
    const element = document.getElementById('hero')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
      <Head>
        <title>JohnGardner.dev</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <footer className='sticky bottom-0 w-full cursor-pointer text-white/20 hover:text-white duration-300'>
        <div className='flex justify-center md:justify-end' onClick={handleHeroScroll}>
          <div className='inline-flex mr-5'>
            <ChevronDoubleUpIcon className='h-10 w-auto' />
            <p className='mt-3 uppercase text-sm'>return to top</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div >
  )
}

export default Home