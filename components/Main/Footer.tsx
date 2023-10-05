import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
import { ImInstagram } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { BiChevronRightCircle } from 'react-icons/bi';
import MapComponent from './MapComponent';

const OrderButton = styled.button`
  background-color: #F2852F;
  border-radius: 40px;
  padding: 19px 34px;
  margin: 0px 10px 10px 10px;
  font-size: 15px;
  line-height: 15px;
  color: #fff;
  margin-top: 7%;
  display: flex; 
  align-items: center; 
  gap: 5px; 

  @media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px) {
width:100%;
}

@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
width:100%;
}
  
&:hover{
  background-color:#73C7FC;
}

`;

const greyColor = "#f5f5f5";

const FooterWrapper = styled.footer`
  ${tw`text-white`}
  background-color: ${greyColor};
  left: 0;
  right: 0;
  bottom: 0;
  height: 500px;
  
  .top {
    display: flex;
    flex-wrap: wrap;
    background-color: ${greyColor}; 
  }

  .left {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${greyColor};
    margin-top: 6%;
    margin-left: 9%;
    padding: 20px; 
    height: 60%;
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: center;
    width: 40%;
  }
  

  .right {
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #fff;
    text-align: left;
    margin-left:-20px;
    margin-top: 15.6%;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 60%;

   

    h1 {
      font-size: 23px !important;
      margin-bottom: 20px;
      color: #60707D;
      font-weight: bold;
    }

    .contact-follow {
      display: flex;
      flex-direction: row;
      gap: 220px;
      align-items: center;
    }

    .contact {
      padding-left: 30px;
    }

    .follow {
      padding-right: 100px;
    }

    .contact-details {
      padding-left: 30px;
    }

    .contact-details ul {
      list-style-type: none;
      padding: 0;
    }

    .contact-details li {
      margin-bottom: 20px;
      font-size: large;
      color: #60707D;
      display: flex;
      align-items: center;
    }

    .phone-icon {
      color: #F2852F;
      margin-right: 10px;
    }

    .envelop-icon {
      color: #F2852F;
    }

    .social-icons {
        display: flex;
        align-items: center; 
      }
  
      .social-icon {
        font-size: 24px;
        color: #007BFF;
        margin-right: 10px;
      }
  }

  .container{
    ${tw`max-w-full`}
    background-color: ${greyColor};
    height:80%;
    display: flex;
    flex-direction: row;
    left: 0;
    right: 0;
    
    justify-content: center;

    .row{
        background-color:none;
        width:80%;
        display: flex;
        flex-direction: row;
       
    }

    .row-left {
        background-color: none;
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-bottom:5%;
      }
      
      .row-left h1 {
        color: #60707D;
        font-weight: bold;
        font-family: 'Roboto';
        font-size: 40px !important;
        align-self: center;
        margin-top: 100px;
      }
      
      .row-left-container {
        display: flex;
        justify-content: space-between;
      }
      
      .row-left-one,
      .row-left-two,
      .row-left-three {
        margin-top: 1px;
        margin-right: 140px;
      }
      
      .row-left-one ul,
      .row-left-two ul,
      .row-left-three ul {
        list-style-type: none;
        padding: 0;
        text-align: center;
      }
      
      .row-left-one li,
      .row-left-two li,
      .row-left-three li {
        font-size: large;
        color: #60707D;
      }

      .row-left-one li a,
      .row-left-two li a,
      .row-left-three li a{
        &:hover {
          color:#73c7fc;
        }
      }

    }


      .row-right {
        background-color: none;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        margin-left:30%;
      }
    
    .btn {
        background-color: #F2852F; 
        color: white; 
        border: none; 
        width:200px;
        padding: 15px 0px 10px 0px;
        border-radius: 30px;
        flex-wrap: nowrap;
        font-size: 15px;
        line-height: 24px;
        text-transform: uppercase;
        display: inline-block;
        text-align: center;
      }
      
      .btn:hover {
        background-color: lightblue;
      }

      .bottom {
        background-color: ${greyColor};
        height: 134px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 150px;
        padding-right: 150px;
        color: black;
      }
    
      
    
      .logo-and-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        margin-left: 90px;
        padding-left: 200px;
        padding-right: -500px;
      }
    
      p {
        margin-top:30px;
        margin-left: 20px; 
        color:#60707D;
        font-size:13px;

        @media (max-width: 768px) {
          margin-top:0px;
        }

        @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
        margin-left:0px;
        
       }

      }

      .paragraph2 {
        
        align-items: flex-end;
        margin-left: 600px;
        color: #60707D;
        inline: inline-block;
      }
      

}      
  
`;

const WebFooterWrapper = styled.footer`
  
  @media (max-width: 768px) {
    display: none; 
  }
`;

const MobileFooterWrapper = styled.footer`
  
  display: none; 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    display:block; 

    .top{
      @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
        flex-direction: column;
      }
    }

    .left{
      margin-left:10px;

      @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
        margin-left: 0px;
        width: 100%;
      }
    }
    
    .right{
      width:50%;
      display: flex;
      flex-direction: column;
      gap: 0px;
      margin-top: 13.7%;
      
      @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
        margin-left: 0px;
        width: 100%;
      }

      .contact-follow{
        display: flex;
        flex-direction: column;
        gap: 0px;

        h1{
          margin-right: 120px;

          @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
            margin-right:0px;
           }
        }
      }

      .icons{
        display: flex;
        flex-direction: row;
        margin-right:250px;

        @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
               margin-right:120px;
           }
      }
    }

    .row-right{
      background-color: none;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        margin-left:0%;
        margin-bottom:10%;
    }
    .bottom{
      display: flex;
      flex-direction: column;

      @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
           padding:0px;
       }
    }
    
    .logo-and-text{
      display: flex;
      flex-direction: column;
      padding-left:0px;
      margin-top:2%;

      @media only screen
      and (min-device-width : 320px)
      and (max-device-width : 480px) {
        margin-right: 100px;
        width: 90%;
        
       }

      .p{
        margin-top:0px;
        
      }

      .paragraph2{
        margin-left:0px;
        margin-top:10%;
      }
    }

    .row-left-container{
      display: flex;
      flex-direction: column;
      color: #60707D;
    }

    .row-left{
      @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
            text-align: center;
            margin-left: 20%;
            
      }

      @media only screen
         and (min-device-width : 768px)
         and (max-device-width : 1024px) {
           margin-left: 100px;
           text-align: center;
}
    }

    .row{
      @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
            width:100%;
      }
    }

    .email{
      @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 480px) {
           margin-left:0px;
           font-size: 10px;
      }
    }

  }
`;


const LogoImage = styled.img`
  ${tw`max-w-full`}
`;



const Footer = () => {
    const mapCenter = { lat: 40.7128, lng: -74.0060 };
  return (
    <FooterWrapper>
      
      <MobileFooterWrapper>
        <div className="top">
          <div className="left"><MapComponent/></div>
          <div className="right">
            <span className="contact-follow">
              <h1 className='contact'>CONTACT US</h1>
              <div className="contact-details">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMapMarker} style={{ color: '#F2852F' }} />
                    <span style={{ marginLeft: '10px' }}>12343 Schaefer, Detroit, MI</span>
                  </li>
                  <li>
                    <div className="phone-icon">
                      <FaPhoneAlt />
                    </div>
                    <span>(313) 935-3001</span>
                  </li>
                  <li>
                    <div className='envelop-icon'>
                      <FaEnvelope />
                    </div>
                    <span className='email' style={{ marginLeft: '10px' }}>supremewindowfactory@gmail.com</span>
                  </li>
                </ul>
              </div>
              <h1 className='contact1'>FOLLOW US</h1>
              <div className='icons'>
              <BiLogoFacebook style={{marginLeft:'120px',color: '#60707D',fontSize:'30px'}}/><ImInstagram style={{color: '#60707D',fontSize:'25px',marginLeft:'20px'}}/><BsTwitter style={{ color: '#F2852F',fontSize:'25px',marginLeft:'30px' }}/>
              </div>
            </span>
            
          </div>
        </div>
      <div className="container">
        <div className="row">
            <div className="row-left">
                <h1 style={{marginBottom:'30px'}}>SITEMAP</h1>
                <div className="row-left-container">
                    <ul>
                        <li>HOME</li>
                        <li style={{paddingTop: '15px'}}><a href='#'>ABOUT</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>PRODUCTS</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>GALLERY</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>CONTACT</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>How to Measure</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>Glossary</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>SEND FEEDBACK</a></li>
                    </ul>

                    <OrderButton>
                       <BiChevronRightCircle style={{ marginRight: '10px',fontSize:'20px',marginTop:'15px' }} />
                       <span>ORDER NOW</span>
                     </OrderButton>
                </div>
            </div>
            
            
          
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'#f5f5f5' }}>
  <hr style={{ width: '50%', borderTop: '1px solid #bdb5b5' }} />
</div>
      <div className="bottom"> 
  <div className="logo-and-text">
    <LogoImage src="/images/logo.png" alt="Logo" />
    <p>All Rights Reserved <span style={{fontWeight:'bold'}}>@Supreme Window Factory</span></p>
    <p className="paragraph2">Powered by <span style={{fontWeight:'bold'}}>Cogent</span></p>
  </div>
      </div>
      <hr style={{ width: '100%', borderTop: '8px solid #73C7FC' }} />
      </MobileFooterWrapper>


      <WebFooterWrapper>
      <div className="top">
        <div className="left"><MapComponent/></div>
        <div className="right">
          <span className="contact-follow">
            <h1 className='contact'>CONTACT US</h1>
            <h1 className='follow'>FOLLOW US</h1>
          </span>
          <div className="contact-details">
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarker} style={{ color: '#F2852F' }} />
                <span style={{marginLeft:'10px'}}>12343 Schaefer, Detroit, MI</span><BiLogoFacebook style={{marginLeft:'120px',color: '#60707D',fontSize:'30px'}}/><ImInstagram style={{color: '#60707D',fontSize:'25px',marginLeft:'20px'}}/><BsTwitter style={{ color: '#F2852F',fontSize:'25px',marginLeft:'30px' }}/>
              </li>
              <li>
                <div className="phone-icon">
                  <FaPhoneAlt />
                </div>
                <span>(313) 935-3001</span>
              </li>
              <li>
                <div className='envelop-icon'>
                  <FaEnvelope/>
                </div>
                <span style={{marginLeft:'10px'}}>supremewindowfactory@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="row-left">
                <h1 style={{marginBottom:'30px'}}>SITEMAP</h1>
                <div className="row-left-container">
                <div className="row-left-one">
                    <ul>
                        <li><a href='#'>HOME</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>ABOUT</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>PRODUCTS</a></li>
                    </ul>
                </div>
                <div className="row-left-two">
                <ul>
                        <li><a href='#'>GALLERY</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>CONTACT</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>How to Measure</a></li>
                    </ul>
                </div>
                <div className="row-left-three">
                <ul>
                        <li><a href='#'>Glossary</a></li>
                        <li style={{paddingTop: '15px'}}><a href='#'>SEND FEEDBACK</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="row-right">
            <OrderButton>
              <BiChevronRightCircle style={{ marginRight: '10px',fontSize:'20px' }} />
              <span>ORDER NOW</span>
            </OrderButton>
            
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'#f5f5f5' }}>
  <hr style={{ width: '50%', borderTop: '1px solid #bdb5b5' }} />
</div>
      <div className="bottom"> 
  <div className="logo-and-text">
    <LogoImage src="/images/logo.png" alt="Logo" style={{marginLeft:'-300px'}}/>
    <p>All Rights Reserved <span style={{fontWeight:'bold'}}>@Supreme Window Factory</span></p>
    <p className="paragraph2">Powered by <span style={{fontWeight:'bold'}}>Cogent</span></p>
  </div>
      </div>
      <hr style={{ width: '100%', borderTop: '8px solid #73C7FC' }} />
      </WebFooterWrapper>
      
    </FooterWrapper>
  );
};

export default Footer;
