import React from 'react';
import { GoogleReviews } from "./GoogleReviews";

export const GoogleCarosole = () => {
  return (
    <div className='relative left-1/4'>
      <div className='flex flex-row gap-x-8'>
        <GoogleReviews rate={5} name="Christy Gonzales" writtenReview="Hubby had to switch barbershops because of work schedule-needs Mondays. Nice shop. Felt like I was in the movie Barber Shop! Loved it!
                No bad language allowed. BIG thumbs up! Hubby was VERY pleased with new cut. Tight & Clean." />
      </div>
    </div>
  );
};
