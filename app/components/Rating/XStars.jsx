import React from 'react';
import { EmptyStar,FillStar } from '../Icons';

export const XStars = (props) => {
  const countStars = () => {
    let rating = null;

    switch (props.rate) {
      case 1:
        rating = (
          <div className='flex flex-row'>
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </div>
        );
        break;
      case 2:
        rating = (
          <div className='flex flex-row'>
            <FillStar />
            <FillStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </div>
        );
        break;
      case 3:
        rating = (
          <div className='flex flex-row'>
            <FillStar />
            <FillStar />            
            <FillStar />
            <EmptyStar />
            <EmptyStar />
          </div>
        );
        break;
      case 4:
        rating = (
          <div className='flex flex-row'>
            <FillStar />
            <FillStar />            
            <FillStar />
            <FillStar />
            <EmptyStar />
          </div>
        );
        break;
      case 5:
        rating =
        (  
        <div className='flex flex-row'>
          <FillStar />
          <FillStar />            
          <FillStar />
          <FillStar />
          <FillStar />
        </div>
      )
        break;
      default:
        rating = null;
        break;
    }

    return rating;
  };

  return <div className='flex flex-col'>
          {countStars()}
         </div>;
};
