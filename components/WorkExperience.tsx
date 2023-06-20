import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function WorkExperience({ }: Props) {
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
            <h3 className='mt-16 md:mt-0 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>

                {/* HACK REACTOR */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-auto md:w-auto xl:w-auto px-6 snap-center bg-[#292929] pt-10 pb-14 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden lg:min-w-[550px]'
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
                        className='w-auto h-28 md:h-32 mb-6 rounded-full xl:w-auto xl:h-[150px] object-cover object-center'
                        src="https://avatars.githubusercontent.com/u/2824164?s=200&v=4" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl lg:text-2xl font-normal tracking-wide mt-6 uppercase text-center'>Software Engineer Immersive Resident</h4>
                        <p className='font-bold text-2xl lg:text-2xl text-center'>Hack Reactor</p>
                        <p className='uppercase text-gray-300 text-center lg:text-lg'>March 2023 - Current</p>
                        {/* <ul className='list-disc ml-5 text-sm md:text-base'>
                            <li>Provided one-on-one and small-group technical guidance and support to students, helping them navigate the complex world of software engineering and project management</li>
                            <li>Provided support and mentorship to our students, helping them grow as engineers/individuals</li>
                        </ul> */}
                    </div>
                </article>
                {/* KELLER WILLIAMS */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] px-6 snap-center bg-[#292929] pt-10 pb-14 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden lg:min-w-[550px]'
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
                        className='w-auto h-20 md:h-32 mb-6 xl:w-auto xl:h-[150px] object-cover object-center'
                        src="https://1000logos.net/wp-content/uploads/2017/08/Color-Keller-Williams-Logo-500x341.jpg" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl lg:text-2xl font-normal tracking-wide mt-6 uppercase text-center'>Real Estate Associate</h4>
                        <p className='font-bold text-xl lg:text-2xl text-center'>Keller Williams</p>
                        <p className='uppercase text-gray-300 text-center lg:text-lg'>October 2020 - March 2023</p>
                        {/* <ul className='list-disc ml-5 text-sm md:text-base'>
                            <li>Managed prospective client expectations by providing a detailed assessment of property value through comprehensive comparative analyses of like properties</li>
                            <li>Ensured greater client satisfaction by coherently discerning their needs and guiding them on their journey to find the perfect property to meet those needs</li>
                        </ul> */}
                    </div>
                </article>
                {/* SUB-CULTURE */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] px-6 snap-center bg-[#292929] pt-10 pb-14 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden lg:min-w-[550px]'
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
                        className='w-auto h-20 md:h-32 mb-6 xl:w-auto xl:h-[150px] object-cover object-center'
                        src="https://www.sub-culture.org/wp-content/themes/subculture_2020/assets/img/subculture-group-white2.png" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl lg:text-2xl font-normal tracking-wide mt-6 uppercase text-center'>Bar Manager</h4>
                        <p className='font-bold text-xl lg:text-2xl text-center'>Sub-Culture Group</p>
                        <p className='uppercase text-gray-300 text-center lg:text-lg'>January 2019 - October 2020</p>
                        {/* <ul className='list-disc ml-5 text-sm md:text-base'>
                            <li>Managed a team of 20 across two different locations and spanning multiple roles</li>
                            <li>Saved the company thousands of dollars per week by auditing inconsistencies in the bookkeeping system and implementing new protocols that reduced the occurrence of errors</li>
                            <li>Increased patronage by making recommendations to ownership for new products based on market research and emerging trends within the industry</li>
                        </ul> */}
                    </div>
                </article>
                {/* BREWHOUSE */}
                <article
                    className='flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] px-6 snap-center bg-[#292929] pt-10 pb-14 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden lg:min-w-[550px]'
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
                        className='w-auto h-20 md:h-32 mb-6 xl:w-auto xl:h-[150px] object-cover object-center'
                        src="https://static.wixstatic.com/media/8b4269_836d6cf8ea864981873f7d18132f4b58~mv2.jpg/v1/crop/x_13,y_0,w_425,h_284/fill/w_426,h_284,al_c,lg_1,q_80,enc_auto/BHlogo_JPG.jpg" alt=""
                    />

                    <div className='px-0 space-y-8'>
                        <h4 className='text-xl lg:text-2xl font-normal tracking-wide mt-6 uppercase text-center'>General Manager</h4>
                        <p className='font-bold text-xl lg:text-2xl text-center'>Brewhouse Gallery</p>
                        <p className='uppercase text-gray-300 text-center lg:text-lg'>January 2018 - January 2019</p>
                        {/* <ul className='list-disc ml-5 text-sm md:text-base'>
                            <li>Made the business more efficient by researching, comparing, and implementing a new Point of Sale system that better suited the business’s needs for flexible inventory management</li>
                            <li>Saved the business tens of thousands of dollars by researching multiple transaction processors and using that data to negotiate a competitive rate that was locked in for 5 years</li>
                        </ul> */}
                    </div>
                </article>
            </div>

        </motion.div>
    )
}

export default WorkExperience