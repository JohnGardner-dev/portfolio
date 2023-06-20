import React, { useRef } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'


type Props = {}

function ContactMe({ }: Props) {
    const form = useRef<HTMLFormElement | null>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_dygjwex',
                'contact_form',
                form.current ?? '',
                'xtA8ndsIZmotKNiID'
            )
            .then((result) => {
                console.log(result.text)
                form.current!.reset()
            })
            .catch((error) => {
                console.log(error.text)
            })
    }

    return (
        <div className='h-screen flex relative flex-col text-left justify-evenly items-center'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
                contact
            </h3>
            <div className='relative space-y-3 flex-col'>
                <h4 className='text-2xl md:text-4xl font-semibold text-center mt-20'>
                    Want to chat?{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk!</span>
                </h4>
                <div className='flex items-center space-x-2 justify-center mt-10'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p
                        className='text-xl md:text-2xl'
                    >
                        +1 561 801 8099
                    </p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl md:text-2xl'>
                        john.gardner823@gmail.com
                    </p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl md:text-2xl'>
                        Seattle, WA
                    </p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2'>
                    <label>Name</label>
                    <input type="text" name="user_name" className='contactInput' placeholder='your name' />
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='email@email.com' className='contactInput' />
                    <label>Message</label>
                    <textarea name="message" className='contactInput' placeholder='your message here...' />
                    <input type="submit" value="Send" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer' />
                </form>
            </div>
        </div>
    )
}
export default ContactMe