import React from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';
import ProfileWrapper from '../components/Profile/ProfileForm'






const DataOrders = () => {
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
            <div><ProfileWrapper/></div>
            <div><Footer/></div>
        </div>
        );
};

export default DataOrders;