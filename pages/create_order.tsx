import React from 'react';
import Footer from '../components/Main/Footer';
import Header from '../components/Main/Header';
import DivFour from '../components/Home/About';
import DivThree from '../components/Home/Services';
import SecondDiv from '../components/Home/Customize';
import DualDivWithImages from '../components/About/TwoDivsComponent';
import TwoDivsComponent from '../components/About/TwoDivsComponent';

const CreateOrder = () => {
  return (
    <div>
      <div><Header/></div>
      <div style={{marginTop:'5%'}}><DivFour showButton={undefined}/></div>
      <div className="flex flex-col flex-grow  " >
        <TwoDivsComponent
          imageUrl="/images/2.png"
          imageAlt="Image 1"
          text="This is some text on the right of Image 1"
          imageOnLeft={true}
        />
      </div>
      <div className="flex flex-col flex-grow " >
        <TwoDivsComponent
          imageUrl="/images/1.png"
          imageAlt="Image 2"
          text="This is some text on the left of Image 2"
          imageOnLeft={false}
        />
      </div>
      <div><DivThree/></div>
      <div><SecondDiv/></div>
      <div><Footer/></div>
    </div>
  );
};

export default CreateOrder;
