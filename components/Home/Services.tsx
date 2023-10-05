import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';


const Container = styled.div`
background: linear-gradient(0deg, rgba(43, 54, 54, 0.5), rgba(43, 54, 54, 0.5)), url(/images/Slider-2@2x.png);
  background-size: cover;
  background-position: center;
  height: 350px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff; 


  @media (max-width: 768px) {
    width:100%;
    margin-bottom:5%;
  }
`;


const Title = styled.h1`
  
  margin-top: 40px; 
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px !important;

  @media (max-width: 768px) {
    text-align: center;
  }
`;


const Button = styled.button`
background-color: #F2852F;
border-radius: 40px;
padding: 13px 41px;
font-size: 15px;
line-height: 24px;
margin: 0px 10px 10px 10px;
color: #fff;
margin-top: 3%;
margin-left: 3%;
display: flex; 
align-items: center; 
height:50px;
width:250px;
gap: 5px; 

&:hover {
    background-color: #73C7FC; 
`;



const DivThree = () => {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const router = useRouter();
  useEffect(() => {
    
     if(router.pathname === '/products'){
      setSelectedButton('PRODUCTS');
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
        <Title>WHAT ARE OUR SERVICES?</Title>
        
        <Button onClick={() => handleButtonClick("PRODUCTS")}><BiChevronRightCircle style={{ marginRight: '10px',fontSize:'20px' }} />DISCOVER NOW</Button>
      </Container>
    );
};

export default DivThree;
