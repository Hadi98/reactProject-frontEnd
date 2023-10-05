import React from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import SecondDiv from '../components/Home/Customize';
import HowToMeasure from '../components/Measure/HowToMeasure';

import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CenteredYouTubeVideo from '../components/Measure/YouTube';



const Measure = () => {
    const router = useRouter();
    const { route } = router;
    return (
        <div>
            <div><Header/></div>
            <h1 style={{ color: 'black', marginTop: '10%', marginLeft: '10%' }}>
             <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link>
             {' '}
             <a href={route}>{route}</a>
             </h1>
             <ScrollToTopButton/>
            <div><HowToMeasure imageUrl={''} imageAlt={''} text={''} imageOnLeft={true}/></div>
            <div><HowToMeasure imageUrl={''} imageAlt={''} text={''} imageOnLeft={false}/></div>
            <CenteredYouTubeVideo videoId="YOUR_VIDEO_ID_HERE" />
            <div><SecondDiv/></div>
            <div><Footer/></div>
        </div>
        );
};

export default Measure;