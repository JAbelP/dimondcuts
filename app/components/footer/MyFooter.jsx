import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const  MyFooter = () => {
  return (
    <div className='bg-color1 h-screen'>

    <div className='grid grid-flow-row gap-y-4 pl-3 lg:grid-flow-col pt-6'>
     <div className='text-center'>
        <p className='text-xl font-bold'>
            Get In Touch
        </p>
        <a href="https://www.facebook.com/InspirePropertiesOfNorthCarlina/" rel="noopener noreferrer">
            <div className='flex flex-row gap-x-2 justify-center mb-2'>

            </div>
        </a>
        <a href="tel:919-600-8888">
        <div className='flex flex-row gap-x-2 justify-center'>
            call us 919-xxx-xxxx
        </div>
    </a>
     </div>
     
    <div className='mt-2 text-center pb-5'>
    <p className='text-xl font-bold'>
        Follow us on the web
        </p>
        <p className='whitespace-pre-line'>LOCATION </p>
        <div className='flex justify-center'>
        </div>
     </div>
     

    </div>
    
    </div>)
}