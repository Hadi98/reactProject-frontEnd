import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';

import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import SecondDiv from '../components/Home/Customize';
import ImageGallery from '../components/Gallery/ImageGallery';
import { useRouter } from 'next/router';
import Link from 'next/link';



const GALLERY = () => {
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
      <div><ImageGallery /></div>
      <div><SecondDiv/></div>
      <div><Footer/></div>
    </div>
  );
};

export default GALLERY;
