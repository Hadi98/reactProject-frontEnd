import React from 'react';
import { FaStar } from 'react-icons/fa';

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        size={20}
        color={i <= rating ? '#F2852F' : '#ccc'}
      />
    );
  }

  return <div className="star-rating" style={{display: 'flex', marginTop:'3%'}}>{stars}</div>;
};

export default StarRating;
