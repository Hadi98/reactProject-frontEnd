import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import ContactForm from '../components/Contact/ContactForm';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import { useRouter } from 'next/router';
import Link from 'next/link';



const Contact = () => {
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
      <div><ContactForm/></div>
      <Footer/>
    </div>
  );
};

export default Contact;
