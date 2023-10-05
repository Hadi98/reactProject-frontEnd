import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyApp from './_app';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import FirstDiv from '../components/Home/Banner';
import SecondDiv from '../components/Home/Customize';
import DivThree from '../components/Home/Services';
import DivFour from '../components/Home/About';
import Why from '../components/Home/WhyUs';
import Gallery from '../components/Home/Gallery';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import Loading from '../components/Loding/Loading';




const Dashboard = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    
    <div>
      <div><Header/></div>
      <ScrollToTopButton/>
      <div><FirstDiv/></div>
      <div><SecondDiv/></div>
      <div><DivThree/></div>
      <div><DivFour showButton={showButton} /></div>
      <div><Why/></div>
      <div><Gallery/></div>
      <div><Footer/></div>
    </div>
  );
};


export default Dashboard;
