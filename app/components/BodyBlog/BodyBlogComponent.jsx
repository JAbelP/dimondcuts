import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playFair = Playfair_Display({ subsets: ['latin'] });

export const BodyBlogComponent = () => {
  return (
    <div className={`
        text-black 
          ml-16 mt-10 pb-5
          `}
    >
      <div className='capitalize w-1/2'>
        {/* SECTION */}
        <div className='mb-10 '>
          <p className={`text-4xl ${playFair.className} `}> 100% Satisfaction Guaranteed </p>
          <p className={`text-xl mt-5`}>
            At our barber shop, we pride ourselves on delivering unparalleled customer satisfaction. 
            From our skilled hairstylists to our friendly service, we go above and beyond to ensure you
            leave with a haircut that exceeds your expectations
          </p>
        </div>
        {/* SECTION */}

        {/* SECTION */}
        <div className='mb-10'>
          <p className={`text-4xl ${playFair.className} `}> Experience High-Level Hairstyling </p>
          <p className={`text-xl  mt-5`}>
            When you choose our barber shop, you can expect nothing less than the highest level of hairstyling expertise.
            Our talented barbers stay up-to-date with the latest trends and techniques, ensuring you receive a personalized 
            and fashionable haircut that suits your unique style.&quot;
          </p>
        </div>
        {/* SECTION */}

        {/* SECTION */}
        <div className='mb-10'>
          <p className={`text-4xl ${playFair.className} `}> Unleash Your Style with Confidence </p>
          <p className={`text-xl  mt-5`}>
            Step into our barber shop and unlock your true style potential. Our dedicated team listens to your preferences,
            offers professional advice, and skillfully brings your vision to life. Walk out feeling confident and looking 
            your absolute best.
          </p>
        </div>
        {/* SECTION */}

        {/* SECTION */}
        <div className='mb-10'>
          <p className={`text-4xl ${playFair.className} `}> 100% Satisfaction Guaranteed </p>
          <p className={`text-xl  mt-5`}>
            Exceptional Service from Start to Finish: From the moment you walk through our doors, 
            we prioritize your comfort and satisfaction. Our attentive staff provides a warm and welcoming atmosphere, 
            Experience exceptional service throughout your visit.
          </p>
        </div>
        {/* SECTION */}
      </div>
    </div>
  );
};
