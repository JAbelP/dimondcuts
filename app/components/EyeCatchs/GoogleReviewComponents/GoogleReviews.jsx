import React from 'react';
import Image from 'next/image';
import { EmptyStar } from '../../Icons';
import {XStars} from '../../Rating/XStars'

export const GoogleReviews = (props) => {
  return (
    <div>
      <div className='h-72 w-52 bg-white mx-auto my-5 rounded-xl shadow-2xl text-black px-5 pt-4 overflow-hidden'>
        {/* Top of the card */}
        <div>
          <Image src="/ReviewImages/LadyReview1.png" width={60} height={60} />
          <p className='font-semibold mb-2'>{props.name}</p>
          <XStars rate={props.rate} />
          <p className='overflow-hidden text-ellipsis line-clamp-5'>
            Hubby had to switch barbershops because of work schedule-needs Mondays. Nice shop. Felt like I was in the movie Barber Shop! Loved it!
            No bad language allowed. BIG thumbs up! Hubby was VERY pleased with new cut. Tight & Clean.
          </p>
        </div>
      </div>
    </div>
  );
};
