import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const playFair = Playfair_Display({ subsets: ['latin'] })

export const ProductEyeCatch = () => {
  return (
    <div className='text-black  mb-4'>
        <h2 className={`text-3xl ${playFair.className} ml-6 mb-6`}>
            Try Our Products
        </h2>
        {/* PRODUCT 1 */}
        <div className='ml-6 mb-9 border-b-4 border-color1 '>
        <Image src='/Product/product1.jpg' alt='product-3' width={100} height={100} className='relative '/>

            <h4 className='text-2xl mt-4 '>
                Product Name
            </h4>
            <p>
               Place an Amazon link so Customers give you a portion of what they pay! 
            </p>
        </div>
        {/* END OF PRODUCT 1 */}
        {/* PRODUCT 2 */}
        <div className='text-right mr-6 mb-9 border-b-4 border-color1'>
            <Image src='/Product/product1.jpg' alt='product-3' width={100} height={100} className='relative ml-auto' />
            <h4 className='text-2xl mt-4'>
                Product Name
            </h4>
            <p>
                Product Description Product Description Product Description
            </p>
        </div>
            {/* END OF PRODUCT 2 */}
                {/* PRODUCT 3 */}
        <div className='ml-6 mb-9 border-b-4 border-color1'>
            <Image src='/Product/product1.jpg' alt='product-3' width={100} height={100} className='relative '/>
            <h4 className='text-2xl mt-4'>
                Product Name
            </h4>
            <p>
                Product Description Product Description 
                Product Description 
            </p>
        </div>
                {/* END OF PRODUCT 3 */}
    </div>
  )
}

export default ProductEyeCatch