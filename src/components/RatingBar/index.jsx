import React from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingBar = ({ value }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        value={value}
        isHalf={true}
        onChange={ratingChanged}
        size={20}
        activeColor="#ffd700"
        edit={false} // disable editing
      />
    </div>
  );
};

export {RatingBar};