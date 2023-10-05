import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import { BiChevronRightCircle } from 'react-icons/bi';
import backgroundImage from '../public/images/home-section-1-background.png';
import UserSlider from './UserSlider';
import { Link } from 'react-router-dom';
import router, { useRouter } from 'next/router';



const Containertwo = styled.div`
  display: flex;
  margin-left:60%;
  margin-top:-30%;


  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right:-17%;
  
`;

const RightColumn = styled.div`
  flex: 1;
  
`;

const ImageWrapper = styled.div`
  margin-top: 50px;
  height:43%;
  width:66%;
  background-position: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const SliderWrapper = styled.div`
  background-color:white;
  height:43%;
  width:65%;
  background-position: center;
`;

const OrderButton = styled.button`
  background-color: #73C7FC;
  border-radius: 40px;
  padding: 19px 35px;
  margin: 0px 10px 10px 10px;
  font-size: 15px;
  line-height: 15px;
  color: #fff;
  margin-top: 7%;
  margin-left: 3%;
  display: flex; 
  align-items: center; 
  height:55px;
  gap: 5px; 

  @media (max-width: 768px) {
    margin-left:25%;
    
}
`;

const ReadButton = styled.button`
  background-color: none;
  border-radius: 40px;
  padding: 19px 35px;
  margin: 0px 10px 10px 10px;
  font-size: 15px;
  line-height: 15px;
  color: #fff;
  margin-top: 7%;
  margin-left: 3%;
  display: flex; 
  align-items: center; 
  gap: 5px; 
  border: solid 1px;
  height:55px;

  &:hover {
    background-color: #73C7FC; 
    
  }

  

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
    margin-left: -33%;
    margin-top: 20%;
}

@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
margin-left: -33.5%;
    margin-top: 20%;
}
`;

const StyledFirstDiv = styled.div`
  ${tw`text-black max-w-full`}
    width: 100%;
    height: 640px;
    
    background-size: cover;
    margin-bottom: 115px;
    background: linear-gradient(0deg, rgba(105,105,105, 0.5), rgba(105,105,105,0.5)), url(/images/home-section-1-background.png?81822128beda);
    padding-top:11%;
    background-position:center;

  

  .container {
    width: 770px;
    margin-right: 42%;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .row {
    margin-top: 1.5%;
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    
}

.row-left {
    flex: 0 0 auto;
    width: 50%;
    padding-top: 60px;
    padding-left:8px;
    padding-right:8px;
    float: left !important;
    
}

.row-left-top {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
}

.row-left-top-top{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    width: 100%;
    float: left;
    flex: 0 0 auto;
}

.hadi{
    padding-left: 16px;
    border-left: solid 3px;
    border-color: #fff!important;
}

.text-white {
    --bs-text-opacity: 1;
    color: white;
}

.default-font-family {
    font-family: 'Roboto';
}

.row-left-top-bottom{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
}

.first{
    padding-left:35%;
    padding-right:10%;
    margin-top:-190px;
    font-size: 20px;
    font-family: 'Roboto';
    color:white;
}

.second{
    font-family: 'Roboto';
    font-size: 16px;
    padding-left:35%;
    padding-right:10%;
    margin-top:-120px;
    color:white;
}


@media (max-width: 768px) {
  width:100%;
  background: linear-gradient(0deg, rgba(105,105,105, 0.5), rgba(105,105,105,0.5)), url(/images/home-section-1-background.png?81822128beda);
  height: 640px;
  position: relative;
  background-size: cover;
  background-position: center;
 

  .row-left {
    width: 100%; 
    text-align: center; 
    padding: 0; 
    
  }

  .first, .second {
    display: none;
  }

  .OrderButton{
    margin-left:20%;
  }
  
  .ReadButton{
    margin-left: -33%;
    margin-top: 20%;
  }

  .hadi{
    margin-left:22%;
    margin-top:9%;
    text-align: left;     
  }

  .container{
    display:flex;
    width: 770px;
    margin-right: 0%;
    margin-left: none;
    padding-left: 0px;
    padding-right: 0px;
  }
  
  @media only screen
    and (min-device-width : 320px)
    and (max-device-width : 480px) {
      background: linear-gradient(0deg, rgba(105,105,105, 0.5), rgba(105,105,105,0.5)), url(/images/home-section-1-background.png?81822128beda);
      position: relative;
      background-size: cover;
      background-position: center;


      .container{
        display:flex;
        margin-right: 0%;
        margin-left: none;
        padding-left: 0px;
        padding-right: 0px;
        align-items: center;
      }
}
`;

const FirstDiv = () => {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const router = useRouter();
  useEffect(() => {
    
    if (router.pathname === '/about') {
      setSelectedButton('ABOUT');
    }else{ 
      setSelectedButton('HOME');
    }
  }, [router.pathname]); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    router.push(`/${buttonName.toLowerCase()}`);
  };
    const userData = [
        {
          username: 'John Smith',
          rating: 3,
          comment: 'Working with your team is wonderful. You are the only company we work with when we work with…',
        },
        {
          username: 'Ahmad Ali',
          rating: 4,
          comment: 'Working with your team is wonderful. You are the only company we work with when we work with…',
        },
        {
          username: 'Hassan Haidar',
          rating: 5,
          comment: 'Working with your team is wonderful. You are the only company we work with when we work with…',
        },
      ];
    
  return (
    <StyledFirstDiv>
      <div className="container">
        <div className="row"> 
        <div className="row-left">
            <div className="row-left-top">
                <div className="row-left-top-top">
                    <div className="hadi">
                        <h1 className="text-white default-font-family" style={{fontSize: '43px'}}>
                            <strong>
                                HUGE 
                                <br/>
                                SUMMER
                                <br/>
                                SALE!!
                            </strong>
                        </h1>
                    </div>
                </div>
            </div>
            
        </div>
        <p className='first'>
                        <b>INVEST IN HIGH PERFORMANCE WINDOWS AND DOORS TODAY!!</b>
                    </p>
                    <p className='second'>
                    Summer energy bills super high and causing you stress? Hard to cool your home this time of year?
                    </p>
                    <OrderButton>
              <BiChevronRightCircle style={{ marginRight: '10px',fontSize:'20px' }} />
              <span>ORDER NOW</span>
            </OrderButton>
            <ReadButton onClick={() => handleButtonClick("ABOUT")}>
              <BiChevronRightCircle style={{ marginRight: '10px',borderColor:'white',fontSize:'20px' }} />
              <span>READ MORE</span>
            </ReadButton>
        </div>
      </div>
      <Containertwo>
        {/* Left Side */}
        <LeftColumn style={{}}>
          <ImageWrapper>
            <Image src="/images/window1.png" alt="First Image" />
          </ImageWrapper>
          <ImageWrapper style={{marginTop:'10%',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <Image src="/images/window2.png" alt="Second Image" />
          </ImageWrapper>
        </LeftColumn>

        {/* Right Side */}
        <RightColumn style={{marginLeft:'2%'}}>
          <ImageWrapper>
            <Image src="/images/window3.png" alt="Third Image" />
          </ImageWrapper>
          <SliderWrapper style={{marginTop:'10%',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <UserSlider userData={userData} />
          </SliderWrapper>
        </RightColumn>
      </Containertwo>
    </StyledFirstDiv>
  );
};

export default FirstDiv;


