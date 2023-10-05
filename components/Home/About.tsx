import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';



const Container = styled.div`
  ${tw`flex items-center justify-center`}
  background-color: white;
  height: 80vh; 
  margin-bottom:15%;

  @media (max-width: 768px) {
    width:100%;
    margin-bottom:0%;
    margin-top:10%;
    height:auto;
  }
`;

const LeftSection = styled.div`
  ${tw`flex flex-row`}
  width: 30%;
  height: 100%;

  @media (max-width: 768px) {
    display:none;
  }
`;

const VerticalLineContainer = styled.div`
  ${tw`flex items-center`} 
  margin-left: -20px; 

  @media (max-width: 768px) {
   
    h1{
      margin-left: 0px;
      text-align: center;
    }
  }
`;

const VerticalLine = styled.div`
  ${tw` w-3`}
  height: 100px;
  background-color: #73C7FC;
  height: 180px;
  margin-right:-40%;
  margin-left:30%;

  @media (max-width: 768px) {
    margin-left:10%;
    margin-right:0px;
  }
`;

const Image = styled.img`
  ${tw`object-cover`}
  width: 60%;
  height: 100%; 
`;

const RightSection = styled.div`
  ${tw`text-center`}
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

  @media (max-width:768px){
    margin-left: 0px;
    text-align: center;
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

  @media (max-width: 768px) {
    margin-left: 6%;
    margin-right: 6%;
  }
`;

const Paragraph2 = styled.p`
margin-top: 15px;
font-family: 'Roboto';
max-width: 700px;
margin-left:32%;
color: #60707D;

@media (max-width: 768px) {
  margin-left: 6%;
  margin-right: 6%;
  }
`;

const Button = styled.button`
background-color: none;
border-radius: 40px;
padding: 19px 35px;
margin: 0px 10px 10px 10px;
font-size: 15px;
line-height: 15px;
color: rgba(112,112,112,1.0);
margin-top: 7%;
margin-left: 55%;
display: flex; 
align-items: center; 
gap: 5px; 
border: solid 1px;
height:55px;

&:hover {
  background-color: #73C7FC; 
  
}

@media (max-width: 768px) {
    margin-left: 29%;
  }

`;





const DivFour = ({ showButton }) => {
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
  return (
    <Container>
      <LeftSection>
        <Image src="/images/about-1.png" alt="Image 1" style={{ marginLeft: '-3%', marginTop: '10%', height: '100%' }} />
        <Image src="/images/about-2.png" alt="Image 2" style={{ marginLeft: '10%', marginTop: '35%', height: '100%' }} />
      </LeftSection>
      <RightSection>
      <VerticalLineContainer>
          <VerticalLine />
          <Title>ABOUT<br/> SUPREME WINDOWS FACTORY</Title>
        </VerticalLineContainer>
        <Paragraph>
        Our Family-Owned And Operated Business, Supreme Window Factory Has Manufactured Quality Windows For Over 20 Years With 30 Years Of Window Expertise.
        </Paragraph>
        <Paragraph2>
        Founded by Sam Anani in 1996, Supreme Window Factory has grown over the last 21 years to become worthy of its ‘supreme’ status while selling wholesale. We specialize in both replacement and new…
        </Paragraph2>
        <Button style={{ visibility: showButton ? 'visible' : 'hidden' }} onClick={() => handleButtonClick("ABOUT")}>
        <BiChevronRightCircle style={{ marginRight: '10px', borderColor: 'white', fontSize: '20px' }}
         />
        READ MORE
      </Button>
      </RightSection>
    </Container>
  );
};

export default DivFour;
