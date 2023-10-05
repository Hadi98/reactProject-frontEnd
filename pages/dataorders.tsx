import React from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import TableComponent from '../components/DataOrders/Table';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ScrollToTopButton from '../components/Main/ScrollToTopButton';







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
            <div style={{width:'90%',marginTop:'10%',marginLeft:'10%'}}><TableComponent/></div>
            <div><Footer/></div>
        </div>
        );
};

export default DataOrders;