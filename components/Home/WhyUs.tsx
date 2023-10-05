import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

const Container = styled.div`
  background-size: cover;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: none;
`;

const ImageWrapper = styled.div`
  margin-bottom: 5%;
  height: 10%;
  width: 100%;
  background-position: center;
`;

const Image = styled.img`
  width: 100%;
  height: 10%;
`;

const ContentBox = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align items to the top */
  gap: 20px;
  box-shadow: 2px 2px 2px 2px rgba(43, 54, 54, 0.5);
  width: 840px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 90%;

  @media (max-width: 768px) {
        width: 710px;
        margin-top: 10%;
        opacity:0.9;
    
  }

  @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    width:100%;
    max-width:100%;
    margin-top: 24%;
}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
  gap: 20px;
  margin-left:10%;

  @media (max-width: 768px) {
    margin-left:5%;
    text-align: left;
    margin-top: -10%;
  }

  @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
    
}
`;

const FlexContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 20px;
  margin-left:10%;

  
`;

const VerticalLine = styled.div`
${tw` w-3`}
  height: 100px;
  background-color: #73C7FC;
  margin-top:25%;
  height: 180px;

@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
      width: 0.75rem;
      background-color: #73C7FC;
      margin-top: 18%;
      height: 60px;
}
      
`;



const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left:1%;
  margin-top:30%;
  max-width:200px;
  color: #60707D;

  @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
    margin-top: 20%;
    text-align: center;
    margin-left:0px;
    width:100%;
    font-size:30px;
    max-width:100%;
}
`;

const Paragraph = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    color: rgba(112, 112, 112, 1.0);
    max-width: 420px;
    margin-top: 5%;

    @media (max-width:768px){
      font-size: 20px;
      width: 380px;
      margin-right: 30%;
    }

    @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
    text-align: center;
    font-size: 20px;
    width: 100%;
    margin-right:0px;
   }
`;

const Button = styled.button`
background-color: #73C7FC;
border-radius: 40px;
padding: 19px 35px;
margin: 0px 10px 10px 10px;
font-size: 15px;
line-height: 15px;
color: #fff;
margin-top: 3%;
margin-left: 3%;
display: flex; 
align-items: center; 
gap: 5px; 
border: solid 1px;
height: 55px;

@media (max-width: 768px) {
  margin-right: 30%;
}

@media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
    margin-right:0px;
   }
`;

const Why = () => {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const router = useRouter();
  useEffect(() => {
    
    if(router.pathname === '/contact'){
      setSelectedButton('CONTACT');
    }else{ 
      setSelectedButton('HOME');
    }
  }, [router.pathname]); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    router.push(`/${buttonName.toLowerCase()}`);
  };
  return (
    <Container>
      <ImageWrapper>
        <Image src="/images/why-us.png" alt="First Image" />
      </ImageWrapper>
      <ContentBox>
        <FlexContainer>
          <VerticalLine />
          <Title>WHY WORKING WITH US?</Title>
        </FlexContainer>
        <FlexContainer2>
          <Paragraph>
            Window e-Store has been a leader in high performance and energy-efficient windows for over 30 years. We understand what customers want and have the expertise to ensure you buy the best possible windows or sliding glass doors for your home. We personally review each window or door order to ensure
          </Paragraph>
          <Button onClick={() => handleButtonClick("CONTACT")}><BiChevronRightCircle style={{ marginRight: '10px', fontSize: '20px' }} />CONTACT NOW</Button>
        </FlexContainer2>
      </ContentBox>
    </Container>
  );
};

export default Why;
