import React, { useState, useEffect } from 'react';
import Loading from '../components/Loding/Loading';
import Dashboard from '.'; 
import { GlobalStyle } from '../styles/global';
import "../styles/tailwind.css";
import { HeaderWrapper } from '../components/Main/Header';
import About from './about';
import router, { useRouter } from 'next/router';
import CreateOrder from './create_order';
import SignIn from './signin';
import Contact from './contact';
import GALLERY from './gallery';
import PRODUCTS from './products';
import SignUp from './signup';
import OrderCustomization from '../components/order/OrderCustomization';
import Order from './order';
import Measure from './measure';
import Glossary from './glossary';
import Profile from './profile';
import TableComponent from '../components/DataOrders/Table';
import DataOrders from './dataorders';
import Quotations from './quotations';
import Head from 'next/head';

function MyApp() {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useRouter();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <GlobalStyle />
          <HeaderWrapper /> 
          {router.pathname === '/about' ? <About /> 
          : router.pathname === '/contact' ? <Contact /> 
          : router.pathname === '/gallery' ? <GALLERY /> 
          : router.pathname === '/products' ? <PRODUCTS />
          : router.pathname === '/create-order' ? <CreateOrder/>
          : router.pathname === '/signin' ? <SignIn/>
          : router.pathname === '/signup' ? <SignUp/>
          : router.pathname === '/order' ? <Order/>
          : router.pathname === '/measure' ? <Measure/>
          : router.pathname === '/glossary' ? <Glossary/>
          : router.pathname === '/profile' ? <Profile/>
          : router.pathname === '/dataorders' ? <DataOrders/>
          : router.pathname === '/quotations' ? <Quotations/>
          : <Dashboard />}
        </>
      )}
    </>
  );
}

export default MyApp;
