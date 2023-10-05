import React, { useState , useEffect, useRef} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BsTelephone } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import About from '@/about';




const BlueColor = "#73C7FC";
const Color = "#00000029";


const WebHeaderWrapper = styled.header`
${tw`flex justify-between items-center p-4 bg-white text-white relative `}
  margin-top: -1%;
  width: 100%;
  
  @media (max-width: 768px) {
    display: none; 
  }
`;


const MobileHeaderWrapper = styled.header`
  
  display: none; 
  @media (max-width: 768px) {
    display: flex; 
    direction: row;  
    background-color: #73c7fc;
    width: 100%;
    
    

    .bar{
      display: flex;
      direction: row;
      align-items: center;
      
    }

    .right-5{

    }
  }
`;
export const HeaderWrapper = styled.header`
  
  .btn {
    color: #60707D;
    font-size: 16px;
    padding: 8px;
    border-radius: 30px;
    transition: color 0.3s, box-shadow 0.3s, border-color 0.3s;

    @media (max-width: 768px) {
      width:50%;
      padding: 0px 0px 0px 0px;
      color: ${BlueColor};
      text-align: left;
      height:3%;
      margin-bottom:10%;
    }
  }

  .btn.selected {
    border: 1px solid ${BlueColor};
    color: ${BlueColor};
    background-color: white;
    box-shadow: 0 3px 6px ${Color};
    width: 79px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    padding-left:2%;
    padding-right:2%;

    @media (max-width: 768px) {
      border: 1px solid ${BlueColor};
      width:90%;
      height:3%;
    }
  }


  

  .right-image {
    width: 39px;
    height: 39px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-marker {
    font-size: x-large;
    color: #f2852f;
  }

  .marker {
    width: 16px;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    padding-right: 16px;


    @media (max-width: 768px) {
      flex-direction: column;
      padding-right:0px;
      margin-left:29%;
      align-items: left;
      margin-top:-20px;
      font-size:7px;
      width:auto;


    }

    @media only screen
     and (min-device-width : 320px)
     and (max-device-width : 480px) {
      margin-left:20%;
      width:auto;
}
  }

  .signin {
    color: #60707D !important;
    font-size: 11px !important;
    line-height: 1px;
    cursor: pointer;
    text-align: center;

    
  }

  .under-signin { 
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
    color: #60707D;

    @media (max-width: 768px) {
      font-size: 9px;
    }
  }

  .SignUp {
    color: #60707D !important;
    font-size: 11px !important;
    line-height: 15px !important;
    text-decoration: underline;
    cursor: pointer;
  }

  .right-image-2 {
    width: 39px;
    height: 39px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    margin-left: 16px;
  }

  .location {
    color: #60707D !important;
    font-size: 11px !important;
    line-height: 15px !important;
    cursor: pointer;
    text-align: center;
    text-decoration: underline;
  }

  .address {
    font-size: 12px;
    margin-top: 4px; 
    text-align: center; 
    color: #60707D;
  }

  .bottom-panel{
    display: flex;
    flex-direction: row;
    height:60px;
    position: absolute;
    margin-top: 150px;
    left: 0;
    right: 0;
    
    background: #60707D 0% 0% no-repeat padding-box;
  
    div {
       padding-left: 200px;
       display: flex;
       flex-direction: row;
       text-align: center;
      }
  
      p {
        margin-top:15px;
        text-align: center;
      }
  
      .vertical-line {
        margin: 10px 0;
        margin-left:20px;
        border-left: 1px solid white; 
        height: 40px; 
      }  
  
      button {
        margin-top: 10px; 
        margin-left: -180px;
        display: inline-block;
        color: #FFFFFF;
        background: #73C7FC;
        font-size: 15px;
        line-height: 15px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 44px;
        width: 112px;
        height: 36px;
        padding-top:3%;
        align-items: center; 
      }

      .measure {
        margin-top: 10px;
        margin-left: 150px;
      }


      .measure-label{
        padding-left: 70px;
        margin-top: 10px;
        font-size: 13px;

        &:hover {
          
        }
      }

      .measure-label-1{
        margin-top: 10px;
        margin-left: -180px;
        font-size: 13px;

        &:hover {
          
        }
      }

      .number{
        margin-top: 1px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 18px;
        line-height: 39px;
        text-align: center;
        
      }

      .line{
        margin-left:20px;
        border-left: 1px solid white; 
        height: 40px;
      }

      
    }

    
`;

const LogoImage = styled.img`
  ${tw`max-w-full`}
  margin-top: 10px;
  
  @media (max-width: 768px) {
    margin-left:20%;
    margint-top:20%;
  }
`;

const ButtonContainer = styled.div`
  ${tw` flex justify-center space-x-4`}
  margin-left: -20%;

  @media (max-width: 768px) {
    display: flex;
    direction:column;
    center:none;
    
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  

  @media (max-width: 768px) {
   
  }
`;

const DropdownHeader = styled.div`
  padding: 8px;
  color:#60707D;
  background-color: none;
  cursor: pointer;
  font-size:20px;

  @media (max-width: 768px) {
    color: ${BlueColor};
  }
`;

const DropdownOptions = styled.div`
  font-size:20px;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 2000;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  display: block;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.175);
  width: 100%;
`;

const DropdownOption = styled.div`
  padding: 8px;
  cursor: pointer;
  background: white;
  color: #60707D;
  width: 100%;
  border: 1px solid rgba(0,0,0,.15);
  font-family:Roboto;

  &:hover {
    color:#73c7fc;
  }
`;


const MobileMenuIcon = styled.div`
  cursor: pointer;
  margin-left:1%;
  font-size: 40px;
  color: white; 
  width:5%;
  margin-left:5%;
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  
  background-color: white;
  width: auto;
  height: 100%;
  position: fixed;
  z-index:10000;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: left 0.3s ease-in-out;
  display:flex;
  flex-direction: column;
  align-items: left;
  padding-top: 7%;
  padding-left:3%;
`;




const Header = () => {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const [isSignedIn, setIsSignedIn] = useState(true);
  const router = useRouter();

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [selectedUserOption, setSelectedUserOption] = useState('faourhadi0@gmail.com');

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleUserOptionSelect = (option) => {
    switch (option) {
      case 'My Profile':
        router.push('/profile'); 
        break;
      case 'My Orders':
        router.push('/dataorders'); 
        break;
      case 'Saved Quotations':
        router.push('/quotations'); 
        break;
      case 'logout':
        setIsSignedIn(false);
        router.push('/');
         
        break;
      default:
        
        break;
    }
  };
  

  useEffect(() => {
    
    closeMobileMenu();
    if (router.pathname === '/about') {
      setSelectedButton('ABOUT');
    } else if(router.pathname === '/contact'){
      setSelectedButton('CONTACT'); 
    }else if(router.pathname === '/gallery'){
      setSelectedButton('GALLERY');
    }else if(router.pathname === '/products'){
      setSelectedButton('PRODUCTS');
    }else{ 
      setSelectedButton('HOME');
    }
  }, [router.pathname]); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    router.push(`/${buttonName.toLowerCase()}`);
  };
    
    const handleAboutClick = () => {
      
      router.push('/about');
    };

    const handleClickHere = () => {
      if (isSignedIn) {
        router.push('/order');
      } else {
        router.push('/signin');
      }
    };
    

    const handleSignUpClick = () => {
      router.push('/signup');
    };

  
    const handleMeasureClick = () => {
      router.push('/measure');
    };

    const handleGlossaryClick = () => {
      router.push('/glossary');
    };
  return (
    <HeaderWrapper>
      <MobileHeaderWrapper>
        <div className="bar">
        <MobileMenuIcon onClick={toggleMobileMenu}>
          ☰
        </MobileMenuIcon>
          <LogoImage src="/images/logo.png" alt="Logo" />
          
        </div>
        
        <MobileMenu isOpen={isMobileMenuOpen}>
        
        <button
          className={`btn ${selectedButton === "HOME" ? "selected" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          HOME
        </button>
        
          <button 
          className={`btn ${selectedButton === "ABOUT" ? "selected" : ""}`}
          onClick={() => handleButtonClick("ABOUT")}>
            ABOUT
            </button>
        
        <button
          className={`btn ${selectedButton === "CONTACT" ? "selected" : ""}`}
          onClick={() => handleButtonClick("CONTACT")}
        >
          CONTACT
        </button>
        <button
          className={`btn ${selectedButton === "GALLERY" ? "selected" : ""}`}
          onClick={() => handleButtonClick("GALLERY")}
        >
          GALLERY
        </button>
        <button
          className={`btn ${selectedButton === "PRODUCTS" ? "selected" : ""}`}
          onClick={() => handleButtonClick("PRODUCTS")}
        >
          PRODUCTS
        </button>
      
        <div className="right-image">
    <span className="nav-marker"><img src="/images/mp.png" alt="Profile" className="marker" /></span>
  </div>
  <div className="right">
    <a className="signin" href="#">USA, Michigan</a>
    <div className="under-signin">12343 Schaefer, Detroit, MI</div>
  </div>
  <div className="right-image-2">
    <span className="nav-marker"><img src="/images/marker.png" alt="MP" className="marker" /></span>
  </div>
  {isSignedIn ? ( 
                  <DropdownContainer>
                    <DropdownHeader onClick={toggleUserDropdown}>
                      {selectedUserOption} ▼
                    </DropdownHeader>
                    <DropdownOptions style={{ display: isUserDropdownOpen ? 'block' : 'none' }}>
                      <DropdownOption onClick={() => handleUserOptionSelect('My Profile')}>
                        My Profile
                      </DropdownOption>
                      <DropdownOption onClick={() => handleUserOptionSelect('My Orders')}>
                        My Orders
                      </DropdownOption>
                      <DropdownOption onClick={() => handleUserOptionSelect('Saved Quotations')}>
                        Saved Quotations
                      </DropdownOption>
                      <DropdownOption onClick={() => handleUserOptionSelect('logout')}>
                        logout
                      </DropdownOption>
                    </DropdownOptions>
                  </DropdownContainer>
                  ) : (
          
                    <>
            <div className="right-5">
              <a onClick={handleClickHere} className="location">Sign In</a>
              <div className="address">Don't have an account? <a href="#" className="SignUp" onClick={handleSignUpClick}>Sign Up</a></div>
            </div>
            </>
                  )}
            </MobileMenu>
        </MobileHeaderWrapper>
      
      <WebHeaderWrapper>
      <div className="flex-1">
        <LogoImage src="/images/logo.png" alt="Logo" />
      </div>
      <ButtonContainer>
        <button
          className={`btn ${selectedButton === "HOME" ? "selected" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          HOME
        </button>
        
          <button 
          className={`btn ${selectedButton === "ABOUT" ? "selected" : ""}`}
          onClick={() => handleButtonClick("ABOUT")}>
            ABOUT
            </button>
        
        <button
          className={`btn ${selectedButton === "CONTACT" ? "selected" : ""}`}
          onClick={() => handleButtonClick("CONTACT")}
        >
          CONTACT
        </button>
        <button
          className={`btn ${selectedButton === "GALLERY" ? "selected" : ""}`}
          onClick={() => handleButtonClick("GALLERY")}
        >
          GALLERY
        </button>
        <button
          className={`btn ${selectedButton === "PRODUCTS" ? "selected" : ""}`}
          onClick={() => handleButtonClick("PRODUCTS")}
        >
          PRODUCTS
        </button>
      </ButtonContainer>
      <div className="flex-1 flex justify-end items-center" style={{ margin: 0 }}>
      {isSignedIn ? ( 

        
<div className="right">
<DropdownContainer>
          <DropdownHeader onClick={toggleUserDropdown}>
            {selectedUserOption} ▼
          </DropdownHeader>
          <DropdownOptions style={{ display: isUserDropdownOpen ? 'block' : 'none' }}>
            <DropdownOption onClick={() => handleUserOptionSelect('My Profile')}>
              My Profile
            </DropdownOption>
            <DropdownOption onClick={() => handleUserOptionSelect('My Orders')}>
              My Orders
            </DropdownOption>
            <DropdownOption onClick={() => handleUserOptionSelect('Saved Quotations')}>
              Saved Quotations
            </DropdownOption>
            <DropdownOption onClick={() => handleUserOptionSelect('logout')}>
              logout
            </DropdownOption>
          </DropdownOptions>
        </DropdownContainer>
</div>
          
        ) : (
          
          <>
  <div className="right-image">
    <span className="nav-marker"><img src="/images/mp.png" alt="Profile" className="marker" /></span>
  </div>
  <div className="right">
    <a className="signin" href="#">USA, Michigan</a>
    <div className="under-signin">12343 Schaefer, Detroit, MI</div>
  </div>
  <div className="right-image-2">
    <span className="nav-marker"><img src="/images/marker.png" alt="MP" className="marker" /></span>
  </div>
  <div className="right-2">
    <a onClick={handleClickHere} className="location">Sign In</a>
    <div className="address">Don't have an account? <a href="#" className="SignUp" onClick={handleSignUpClick}>Sign Up</a></div>
  </div>
  </>
        )}
</div>
<div className="bottom-panel">
  <div>
    <p>Start your customized order now</p>
    <div className="vertical-line"></div>
    <button onClick={handleClickHere}><span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',paddingBottom:'100px' }}>
              Click here
            </span></button>
  </div> 
  <div className="measure">
    <a href="#" onClick={handleMeasureClick} className="measure-label">How to Measure</a>
    <div className="line"></div>
    <a href="#" onClick={handleGlossaryClick} className="measure-label-1">Glossary</a>
    <div className="line"></div>
    <BsTelephone style={{ marginTop: '15px',marginLeft:'-180px' }}/>
    <p className="number">(313) 935-3001</p>
  </div>
</div>

</WebHeaderWrapper>
    </HeaderWrapper>
  );
};

export default Header;
