import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
  color: #60707D;
  font-weight: bold;
  font-size: 40px !important;
  font-family: "Raleway", sans-serif;
`;

const DivisionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  display: flex;
  flex-direction: column;
}
`;

const Image = styled.img`
  height: 427px;
  width: 354px;
  border: 2px solid #73C7FC;
  padding: 80px 50px 50px 50px;
  margin: auto;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%; 


  
  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  width:100%;
  max-width:100%;
}
`;

const Text = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  margin-top: -5px;
  font-family: 'Roboto';
  color: #60707D;
`;

interface DivisionData {
  title: React.ReactNode;
  imageSrc: string;
  paragraphs: string[];
  imageOnLeft: boolean;
}

interface CenteredDivisionsProps {
  title: string;
  divisions: DivisionData[];
}

const CenteredDivisions: React.FC<CenteredDivisionsProps> = ({ title, divisions }) => {
  return (
    <Container>
      
      <Title>{title}</Title>
      {divisions.map((division, index) => (
        <DivisionContainer key={index}>
          {division.imageOnLeft ? (
            <>
              
              <Image src={division.imageSrc} alt={`Image ${index + 1}`} />
              <TextContainer>
              <h1 style={{color:'#73C7FC'}}>( 700 SERIES )</h1>
              <Title>{division.title}</Title>
                {division.paragraphs.map((paragraph, i) => (
                  <Text key={i}>{paragraph}</Text>
                ))}
              </TextContainer>
            </>
          ) : (
            <>
              <TextContainer>
              <h1 style={{color:'#73C7FC'}}>( 700 SERIES )</h1>
              <Title>{division.title}</Title>
                {division.paragraphs.map((paragraph, i) => (
                  <Text key={i}>{paragraph}</Text>
                ))}
              </TextContainer>
              <Image src={division.imageSrc} alt={`Image ${index + 1}`} />
              
            </>
          )}
        </DivisionContainer>
      ))}
    </Container>
  );
};

export default CenteredDivisions;
