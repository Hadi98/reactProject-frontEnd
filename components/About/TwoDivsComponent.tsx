import React, { useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
  ${tw`flex items-center justify-center `}
  background-color: white;
  height: 80vh; 
  margin-bottom:15%;
  width:100%;

  @media (max-width: 768px) {
    background-color: white;
    width:100%;
    margin-bottom:0%;
    margin-top:-10%;
    height:auto;
  }
`;



const LeftSection = styled.div`
  ${tw`flex flex-row`}
  width: 30%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftSection2 = styled.div`
  ${tw`flex flex-row`}
  width: 30%;
  height: 100%;
  margin-right: 20%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const VerticalLineContainer = styled.div`
  ${tw`flex items-center`} 
  margin-left: -20px; 

  @media (max-width: 768px) {
    margin-left: -10%;
  }
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
margin-right: 5%;
}
`;
const VerticalLineContainer2 = styled.div`
  ${tw`flex items-center`} 
      margin-left: 15%; 

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-top: 50px;
  }
  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
margin-right: 19%;
}
`;

const VerticalLine = styled.div`
  ${tw`h-20 w-2`}
  background-color: #73C7FC;
  margin-right:-40%;
  margin-left:30%;
`;
const VerticalLine2 = styled.div`
  ${tw`h-20 w-2`}
  background-color: #73C7FC;
  margin-right:-28%;
  margin-left:20%;
`;
const Image = styled.img`
  ${tw`object-cover`}
  width: 60%;
  height: 100%; 
`;

const RightSection = styled.div`
  ${tw`text-center`}
  margin-right:5%;
  margin-left:-20%;

  @media (max-width:768px) {
    
  }
`;

const RightSection2 = styled.div`
  ${tw`text-center`}
  margin-right:5%;
  margin-left:-20%;

  @media (max-width:768px) {
    
  }
`;


const Title = styled.h1`
  ${tw`text-3xl mb-3`}
  font-family: 'Roboto';
  color: #60707D;
  line-height: 55px;
  font-size: 40px;
  max-width: 490px;
  text-align: center;
  margin-left:40%;
  font-weight: bold;

  @media (max-width:768px) {
    height:50px;
    margin-left: 55%;
  }
`;

const Title2 = styled.h1`
  ${tw`text-3xl mb-3`}
  font-family: 'Roboto';
  color: #60707D;
  line-height: 55px;
  font-size: 40px;
  max-width: 490px;
  text-align: center;
  margin-left:44%;
  font-weight: bold;

  @media (max-width:768px) {
    height:50px;
  }
`;

const Paragraph = styled.p`
  margin-left:32%;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 25px;
  font-weight: 400;
  color: #60707D; 
  text-align: center;
  max-width: 650px;
  margin-bottom: 10px;
  margin-top:50px;

   @media (max-width:768px) {
    
    margin-left:20%;
    
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
        margin-left: 22%;
    margin-right: 5%;
}
      
`;
const Paragraph3 = styled.p`
  margin-left:32%;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 25px;
  font-weight: 400;
  color: #60707D; 
  text-align: center;
  max-width: 650px;
  margin-bottom: 10px;
  margin-top:50px;

   @media (max-width:768px) {
    margin-left:20%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  margin-left: 74px;
}
`;
const Paragraph2 = styled.p`
margin-top: 15px;
font-family: 'Roboto';
max-width: 700px;
margin-left:32%;
color: #60707D;

@media (max-width:768px) {
    
    margin-left:20%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
        margin-left: 22%;
    margin-right: 5%;
}
`;

const Paragraph4 = styled.p`
margin-top: 15px;
font-family: 'Roboto';
max-width: 700px;
margin-left:32%;
color: #60707D;

@media (max-width:768px) {
    margin-left:20%;
  }
`;
interface TwoDivsComponentProps {
  imageUrl: string;
  imageAlt: string;
  text: string;
  imageOnLeft: boolean;
}

const TwoDivsComponent: React.FC<TwoDivsComponentProps> = ({
  imageUrl,
  imageAlt,
  text,
  imageOnLeft,
}) => {
  return (
    <div className="p-4 ">
      
        {imageOnLeft ? (
          <>
          <Container>
          <RightSection>
      <VerticalLineContainer>
          <VerticalLine />
          <Title style={{marginLeft:'60%'}}>OUR HISTORY</Title>
        </VerticalLineContainer>
        <Paragraph>
        Our Family-Owned And Operated Business, Supreme Window Factory Has Manufactured Quality Windows For Over 20 Years With 30 Years Of Window Expertise.
        </Paragraph>
        <Paragraph2>
        Founded by Sam Anani in 1996, Supreme Window Factory has grown over the last 21 years to become worthy of its ‘supreme’ status while selling wholesale. We specialize in both replacement and new…
        </Paragraph2>
        
      </RightSection>
      <LeftSection>
        <Image src="/images/glasses.png" alt="Image 1" style={{ marginLeft: '3%', marginTop: '10%', height: '100%' }} />
        <Image src="/images/worker.png" alt="Image 2" style={{ marginLeft: '10%', marginTop: '35%', height: '100%' }} />
      </LeftSection>
            </Container>
          </>
        ) : (
          <>
          <Container>
      <LeftSection2>
        <Image src="/images/girl-reading.png" alt="Image 1" style={{ marginLeft: '-3%', marginTop: '10%', height: '100%' }} />
        <Image src="/images/company.png" alt="Image 2" style={{ marginLeft: '10%', marginTop: '35%', height: '100%' }} />
      </LeftSection2>
      <RightSection2>
      <VerticalLineContainer2>
          <VerticalLine2 />
          <Title2 >OUR VISION</Title2>
        </VerticalLineContainer2>
        <Paragraph3>
        Our Family-Owned And Operated Business, Supreme Window Factory Has Manufactured Quality Windows For Over 20 Years With 30 Years Of Window Expertise.
        </Paragraph3>
        <Paragraph4>
        Founded by Sam Anani in 1996, Supreme Window Factory has grown over the last 21 years to become worthy of its ‘supreme’ status while selling wholesale. We specialize in both replacement and new…
        </Paragraph4>
        
      </RightSection2>
    </Container>
            
            
          </>
        )}
      
    </div>
  );
};

export default TwoDivsComponent;
