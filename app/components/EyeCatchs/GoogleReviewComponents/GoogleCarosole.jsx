import React from 'react';
import { GoogleReviews } from "./GoogleReviews";

export const GoogleCarosole = () => {
  return (
    <div className='relative right-1/2'>
      <div className='flex flex-row gap-x-8'>
        <div className="google-review-left bg-gradient-to-r from-transparent to-white">
          <GoogleReviews rate={5} name="Left" writtenReview="Hubby had to switch barbershops because of work schedule-needs Mondays. Nice shop. Felt like I was in the movie Barber Shop! Loved it! No bad language allowed. BIG thumbs up! Hubby was VERY pleased with new cut. Tight & Clean." />
        </div>
        <GoogleReviews rate={5} name="Christy Gonzales" writtenReview="Hubby had to switch barbershops because of work schedule-needs Mondays. Nice shop. Felt like I was in the movie Barber Shop! Loved it!
                No bad language allowed. BIG thumbs up! Hubby was VERY pleased with new cut. Tight & Clean." />
                
        <div className="google-review-right bg-gradient-to-l from-white to-transparent">
          <GoogleReviews rate={5} name="Right" writtenReview="Hubby had to switch barbershops because of work schedule-needs Mondays. Nice shop. Felt like I was in the movie Barber Shop! Loved it! No bad language allowed. BIG thumbs up! Hubby was VERY pleased with new cut. Tight & Clean." />
        </div>
      </div>
    </div>
  );
};
