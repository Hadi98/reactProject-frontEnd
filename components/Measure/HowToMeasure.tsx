import React, { useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
  ${tw`flex items-center justify-center`}
  background-color: white;
  height: 80vh; 
  margin-bottom:1%;
  margin-right:5%;
`;

const LeftSection = styled.div`
  ${tw`flex flex-row`}
  width: 30%;
  height: 100%;
  margin-left:-10%;
`;

const VerticalLineContainer = styled.div`
  ${tw`flex items-center`} 
  margin-left: -20px; 
`;

const Image = styled.img`
  ${tw`object-cover`}
  width: 60%;
  height: 100%; 
`;

const RightSection = styled.div`
  ${tw`text-center`}

  .list{
    line-height: 22px;
    font-weight: bold;
    width: 45%;
    margin-left:40%;
    margin-top:1%;
  }

  .listStyle{
    list-style: decimal;
    color: #73C7FC;
    font-family: 'Helvetica Neue', Helvetica, Arial, serif;
    font-size: 22px;
    margin-bottom:5%;
  }

  .listItems{
    font-weight: normal;
    color: #707070;
    text-align: center;
  }
`;

const Title = styled.h1`
  ${tw`text-3xl mb-3`}
  font-family: 'Roboto';
  color: #60707D;
  line-height: 55px;
  font-size: 24px;
  max-width: 490px;
  text-align: center;
  margin-left:40%;
  font-weight: bold;
`;

const CenteredContentContainer = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
  margin-top:10%;
`;

const Title1 = styled.h1`
  ${tw`text-3xl mb-3`}
   color: #60707D;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 40px;

}
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #60707D;
  font-family: Roboto,
  padding-left: 50%;
  width:87%;
  margin-top: 5%;
  text-align: center;
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
    <CenteredContentContainer>
        
        {imageOnLeft ? (
          <>
          <Title1>HOW TO MEASURE</Title1>
          <Paragraph>
          Measuring for new construction windows or replacement windows is easier than you think. And to make it even easier, we share some industry trade secrets in the video below.
          </Paragraph>
          <Container>
          <RightSection style={{marginLeft: '-20%',marginRight:'5%'}}>
      <VerticalLineContainer>
          <Title style={{marginLeft:'50%'}}>Windows in Brick or Rock</Title>
        </VerticalLineContainer>
        <div className="list">
         <ol>
             <li className="listStyle"><span className="listItems">From the outside of the home measure the width of the opening at top, middle, and bottom.</span></li>
             <li className="listStyle"><span className="listItems">Take the narrowest measurement and subtract ¼ inch. This will be the width of the window you order.</span></li>
             <li className="listStyle"><span className="listItems">Measure the height of the opening at left side, middle, right side.</span></li>
             <li className="listStyle"><span className="listItems">Take the shortest measurement and subtract ¼ inch. This will be the height of the window you order.</span></li>
             <li className="listStyle"><span className="listItems">Repeat for each opening.</span></li>
         </ol>
        </div>
      </RightSection>
      <LeftSection>
        <Image src="/images/window-measurements-01@1x.png" alt="Image 1" style={{ marginLeft: '3%', marginTop: '35%', height: '60%' }} />
        <Image src="/images/window-measurements-02@1x.png" alt="Image 2" style={{ marginLeft: '10%', marginTop: '35%', height: '50%' }} />
      </LeftSection>
            </Container>
          </>
        ) : (
          <>
          <Container>
      <LeftSection>
        <Image src="/images/window-measurements-03@1x.png" alt="Image 1" style={{ marginLeft: '70%', marginTop: '35%', height: '60%' }} />
        <Image src="/images/window-measurements-04@1x.png" alt="Image 2" style={{ marginLeft: '10%', marginTop: '35%', height: '50%' }} />
      </LeftSection>
      <RightSection>
      <VerticalLineContainer style={{marginRight:'-17%'}}>
          <Title >Windows in Wood Siding, Hardie® Siding, Vinyl Siding, or Stucco</Title>
     </VerticalLineContainer>
     <div className="list" style={{marginLeft:'50%'}}>
         <ol>
             <li className="listStyle"><span className="listItems">From the outside of the home measure the width of the opening at top, middle, and bottom.</span></li>
             <li className="listStyle"><span className="listItems">Take the narrowest measurement and subtract ¼ inch. This will be the width of the window you order.</span></li>
             <li className="listStyle"><span className="listItems">Measure the height of the opening at left side, middle, right side.</span></li>
             <li className="listStyle"><span className="listItems">Take the shortest measurement and subtract ¼ inch. This will be the height of the window you order.</span></li>
             <li className="listStyle"><span className="listItems">Repeat for each opening.</span></li>
         </ol>
        </div>
      </RightSection>
    </Container>
            {/* Text on the left */}
            
          </>
        )}
      
    </CenteredContentContainer>
  );
};

export default TwoDivsComponent;
