import React, { useState } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';
import { IoIosArrowBack } from 'react-icons/io';

type UserData = {
    username: string;
    rating: number;
    comment: string;
  };

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;

  .name{
    padding-top: 20px;
  }

  .rating{
    display: inline-block;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  transition: transform 0.3s ease-in-out;
  text-align: center;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 35px;
  color: #73c7fc;
  justify-content: space-between;
  margin-top: 16px;
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
`;



const UserSlider: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === userData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? userData.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <SliderItem
        style={{
          transform: `translateX(-${currentIndex * 0}%)`,
        }}
      >
        <div className='name'>{userData[currentIndex].username}</div>
        
        
          
        <StarRating rating={userData[currentIndex].rating} />

         

        
        
        
        <div style={{marginTop:'3%'}}>{userData[currentIndex].comment}</div>
        <div style={{marginTop:'5%'}}>
        <ArrowButton onClick={slideNext}>
          <IoIosArrowBack />
        </ArrowButton>
        <ArrowButton onClick={slidePrev}>
          <IoIosArrowBack style={{ transform: 'rotate(180deg)' }} />
        </ArrowButton>
        </div>
        
        
      </SliderItem>
    </SliderContainer>
  );
};

export default UserSlider;