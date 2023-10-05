import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiChevronRightCircle } from 'react-icons/bi';


const SecondDivWrapper = styled.div`
  ${tw` max-w-full`}
  background-color: white; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:6%;
  
  @media (max-width: 768px) {
    width:100%;
    margin-bottom: 30%;

   
    
  }


  .group{
    background-color:#f5f5f5;
    height:100%;
    width:30%;
    margin-left:35%;

    h5{
      color: #60707D;
      margin-top: 30px;
      margin-left: 170px;
    }

    @media (max-width: 768px) {
      width:95%;
      margin-left:2%;

      b{
        margin-left:27%;
      }

      h5{
        text-align: center;
        margin-right: 60px;
        margin-left:0px;
      }
      
    }

    @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {

  h5{
    text-align: center;
    margin-right: 60px;
    margin-left:0px;
  }

  b{
    text-align: center;
    margin-left: 10%;
  }
}
    
  }

 
  
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%; 

  @media (max-width: 768px) {
      width:90%;
      padding-left:10px;
      padding-right:10px;
      margin-bottom:5%;
      font-size:10px;
      text-align:center;
    }

    @media only screen
       and (min-device-width : 320px)
       and (max-device-width : 480px) {
        text-align:center;
        padding: 0px;
        width: 100%;
     }

  .h1{
    font-weight: bold;
    font-size: 40px !important;
    color: #60707D;
    text-transform: uppercase;
    font-family: 'Roboto';
  }
`;

const Title = styled.h1`
font-weight: bold;
font-size: 40px !important;
color: #60707D;
text-transform: uppercase;
font-family: 'Roboto';
margin-bottom: 16px;
margin-top:50px

@media (max-width: 768px) {
    width: 300px;
    text-align: center;
}

@media only screen
       and (min-device-width : 320px)
       and (max-device-width : 480px) {
        text-align:center;
     }
`;

const Paragraph = styled.p`
font-size: 20px;
line-height: 25px;
font-weight: 400;
color: rgba(112, 112, 112, 1.0); 
  text-align: center;
  max-width: 800px;
  margin-bottom: 10px;

  @media only screen
       and (min-device-width : 320px)
       and (max-device-width : 480px) {
        text-align:center;
        font-size: 19px;
     }
`;

const Image = styled.img`
  width: 100px; 
  align-self: flex-center; 
  margin: 16px; 

  @media (max-width: 768px) {
   
    margin-right:10%;
 
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
margin-top: 7%;
margin-left: 32%;
display: flex; 
align-items: center; 
gap: 5px;


`;

const ImageWrapper = styled.div`
  margin-top: 50px;
  height:43%;
  width:45%;
  margin-left: 108px;

  @media (max-width: 768px) {
   margin-left:25%;
  }
`;



const SecondDiv: React.FC = () => {
  return (
    <SecondDivWrapper>
      
      <ContentWrapper>
        <Title>CUSTOMIZE YOUR ORDER</Title>
        <Paragraph>
        Window e-Store has revolutionized the way people buy new construction windows and replacement windows. We made the process of buying custom home windows and doors a breeze by placing the entire process online.
        </Paragraph>
      </ContentWrapper>
      <div className='group'>
        <ImageWrapper>
        <Image src="/images/windowpromax.png" alt="Image Alt Text" style={{height:'100%',width:'100%'}}/>
      </ImageWrapper>
      <h5 ><b>WINDOWS</b></h5>
      <Button><BiChevronRightCircle/>BUY NOW</Button>
      </div>
      
    </SecondDivWrapper>
  );
};

export default SecondDiv;
