import React, { useEffect, useState } from 'react';
import Footer from '../components/Main/Footer';
import Header from '../components/Main/Header';
import DivFour from '../components/Home/About';
import DivThree from '../components/Home/Services';
import SecondDiv from '../components/Home/Customize';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import TwoDivsComponent from '../components/About/TwoDivsComponent';
import { useRouter } from 'next/router';
import Link from 'next/link';

const About: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();
  const { route } = router;


  return (
    <div style={{width:'100%'}}>
      <Header/>
      <h1 style={{ color: 'black', marginTop: '10%', marginLeft: '10%' }}>
        <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link>
        {' '}
        <a href={route}>{route}</a>
      </h1>
      <ScrollToTopButton/>
      <div style={{ marginTop: '1%' }}>
        <DivFour showButton={showButton} />
      </div>
      <div className="flex flex-col flex-grow global" >
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
      <DivThree/>
      <SecondDiv/>
      <Footer/>
    </div>
  );
  function isMobileScreen() {
    return window.innerWidth <= 768;
  }

  // Define styles for mobile view
  const mobileStyles = {
    // Add mobile-specific styles for the div here
    marginBottom: '20px', // Example: Adjust margin for mobile view
  };
};


export default About;
