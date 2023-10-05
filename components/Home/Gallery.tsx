import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  text-align: center;
  margin-top:15%;

  @media (max-width: 768px) {
    margin-top:30%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  margin-top:70%;
}
`;

const GalleryTitle = styled.h2`
  font-weight: bold;
  font-size: 40px !important;
  font-family: "Raleway", sans-serif;
  margin: 20px 0;
  color: #60707D;

  
`;

const GalleryParagraph = styled.p`
font-size: 20px;
line-height: 25px;
font-weight: 400;
color: rgba(112, 112, 112, 1.0);
margin-top: 20px;
max-width:810px;
margin-left:20%;

@media (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
    margin-left: 3%;
    
    font-size: 18px;
    text-align: center;
}
`;

const ImageGallery = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center; 
  margin-top: 5%;
  margin-left:1%;
  margin-right:1%;

  @media (max-width: 768px) {
    margin-left: 0%;
    margin-right: 0%;
    
  }
`;

const GalleryImage = styled.img`
  width: 100%; 
  height: auto;
  margin-bottom: 10px; 

  @media (max-width: 768px) {
    margin-bottom: 0%;
    
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>OUR GALLERY</GalleryTitle>
      <GalleryParagraph>
      Window e-Store has revolutionized the way people buy new construction windows and replacement windows. We made the process of buying custom home windows and doors a breeze by placing the entire process online.
      </GalleryParagraph>
      <ImageGallery>
        <GalleryImage src="/images/1.png" alt="Image 1" />
        <GalleryImage src="/images/2.png" alt="Image 2" />
        <GalleryImage src="/images/3.png" alt="Image 3" />
        <GalleryImage src="/images/4.png" alt="Image 4" />
        <GalleryImage src="/images/5.png" alt="Image 5" />
        <GalleryImage src="/images/6.png" alt="Image 6" />
        <GalleryImage src="/images/7.png" alt="Image 7" />
        <GalleryImage src="/images/8.png" alt="Image 8" />
        <GalleryImage src="/images/9.png" alt="Image 9" />
        <GalleryImage src="/images/10.png" alt="Image 10" />
        <GalleryImage src="/images/11.png" alt="Image 11" />
      </ImageGallery>
    </GalleryContainer>
  );
};

export default Gallery;
