import React from 'react';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import Header from '../components/Main/Header';
import Footer from '../components/Main/Footer';
import OrderCustomization from '../components/order/OrderCustomization';






const Order = () => {
    return (
        <div>
            <div><Header/></div>
            <div style={{marginTop:'5%',marginBottom:'5%'}}><OrderCustomization/></div>
            <div><Footer/></div>
        </div>
        );
};

export default Order;