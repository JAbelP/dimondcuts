import React from 'react'
import Image from 'next/image'

export const MainPageTopEyeCatch = () => {
  return (
    <div
    className='h-96' 
    style={{
        backgroundImage: `url('/Banner/BannerImage.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
    
    </div>
  )
}
