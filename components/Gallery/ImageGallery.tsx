import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const imagesData = [
  { src: '/images/gallery.png', picNumber: 1, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 2, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 3, date: '23 Sep 2020' },
];

const modalImagesData = [
  { src: '/images/gallery.png', picNumber: 1, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 2, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 3, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 4, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 5, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 6, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 7, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 8, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 9, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 10, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 11, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 12, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 13, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 14, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 15, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 16, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 17, date: '23 Sep 2020' },
  { src: '/images/gallery.png', picNumber: 18, date: '23 Sep 2020' },
];

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px;
  margin-top: 5px;

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
margin: 30px;
}

@media (max-width: 768px) {
    margin: 30px; 
  }

`;

const GalleryTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  margin-bottom: 20px;
  color: #60707D;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px;

  @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px) {
     font-size: 35px;
     width:100%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    flex-wrap: wrap; 
  }
  
  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  display: flex;
  flex-direction: column;
}
`;

const CustomImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width:100%;
    
  }
`;

const PicNumber = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  color: #60707D;
`;

const Date = styled.div`
  font-size: 16px;
  color: #888;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 30%;

  ${Row}:hover & {
    display: block;
  }
`;

const ModalOverlay = styled.div`
  border:none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  
`;

const ModalContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 70%;
   width: 50%;
   z-index: 2001;
   
   @media (min-width: 768px) {
    max-width: 80%; 
    max-height: 70%; 
  }
`;

const ModalImage = styled.img`

   display: block;
  object-fit:contain;
  height: 100%;
  margin: 0 auto; 
  position: relative;
  z-index: 2002;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 70px;
  cursor: pointer;
  z-index: 2000;
  color:gray;
`;



const ModalButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  z-index: 2000;
`;



const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 30%;
  background: #60707D;

  @media (max-width: 768px) {
    width: 50%; 
    
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  width: 100%;
}

  .picnum {
    background: rgb(243, 244, 245);
    padding: 20px 20px 40px 20px;
    text-align: left;
    margin-top: 0.5px;
  }

  .dateimage {
    border: 1px solid #EDEFF0;
    font-size: 11px;
    padding: 15px;
    background: rgb(243, 244, 245);
    text-align: left;
    margin-top: 1px;
    
  }
`;

const ModalImageInfo = styled.div`
   text-align: center;
   height:100%;
`;

const ModalImageNumber = styled.div`
   font-size: 12px;
   line-height: 18px;
   font-weight: bold;
   margin-top: 10px;
   color: #CCC;
   margin-left: 92%;
`;

const ModalImageDate = styled.div`
   font-size: 16px;
   color: #888;
`;


const ModalLeftButton = styled(ModalButton)`
  left: 10px;
  color: grey;
    font-size: 48px;
`;

const ModalRightButton = styled(ModalButton)`
  right: 10px;
  color: grey;
    font-size: 48px;
`;

const ImageGallery: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === modalImagesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImagesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <GalleryContainer>
      <GalleryTitle>OUR GALLERY</GalleryTitle>
      {imagesData.map((image, index) => (
        <Row key={index}>
          {image.src && (
            <>
            <ImageWrapper onClick={() => openModal(index)}>
              <CustomImage
                src={image.src}
                alt={`Image ${image.picNumber}`}
              />
              <SearchIcon>🔍</SearchIcon>
              <div className='picnum'>
                <PicNumber>Picture Number {image.picNumber}</PicNumber>
              </div>
              <div className='dateimage'>
                <Date>{image.date}</Date>
              </div>
            </ImageWrapper>
            <ImageWrapper onClick={() => openModal(index)}>
              <CustomImage
                src={image.src}
                alt={`Image ${image.picNumber}`}
              />
              <SearchIcon>🔍</SearchIcon>
              <div className='picnum'>
                <PicNumber>Picture Number {image.picNumber}</PicNumber>
              </div>
              <div className='dateimage'>
                <Date>{image.date}</Date>
              </div>
            </ImageWrapper>
            <ImageWrapper onClick={() => openModal(index)}>
              <CustomImage
                src={image.src}
                alt={`Image ${image.picNumber}`}
              />
              <SearchIcon>🔍</SearchIcon>
              <div className='picnum'>
                <PicNumber>Picture Number {image.picNumber}</PicNumber>
              </div>
              <div className='dateimage'>
                <Date>{image.date}</Date>
              </div>
            </ImageWrapper>
            </>
          )}
        </Row>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            position: 'relative',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
            zIndex: 2001,
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            background: 'transparent',
          },
        }}
      >
        <ModalOverlay>
          <ModalContent>
            
              <ModalLeftButton onClick={prevImage}>
                <BiSolidLeftArrow />
              </ModalLeftButton>
              
              <ModalImageInfo>
              <ModalImage
                src={modalImagesData[selectedImageIndex].src}
                alt={`Image ${modalImagesData[selectedImageIndex].picNumber}`}
                
              />
              <ModalImageNumber>
               {modalImagesData[selectedImageIndex].picNumber} of 18
              </ModalImageNumber>
            </ModalImageInfo>
              <ModalRightButton onClick={nextImage}>
                <BiSolidRightArrow />
              </ModalRightButton>
              
              
              
            
            <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </GalleryContainer>
  );
};

export default ImageGallery;