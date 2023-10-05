import React from 'react';
import Footer from '../components/Main/Footer';
import Header from '../components/Main/Header';
import { useRouter } from 'next/router';
import styled from 'styled-components'; 
import tw from 'twin.macro';
import { FaUserPlus } from 'react-icons/fa';
import SignInForm from '../components/SignIn/SignInForm';

const Image = styled.img`
  opacity: 50%;
`;

const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
`;

const LeftColumn = styled.div`
    background-color: #f5f5f5;
    margin-left: 10%;
    flex: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 768px) {
    margin-left:0%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
    margin-left:0%;
}
`;

const RightColumn = styled.div`
    background-color: #f5f5f5;
    flex: 1.2;
    margin-right: 10%;
    margin-left: 1%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

     @media (max-width: 768px) {
    margin-left:0%;
    margin-right:0%;
    margin-top:5%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
    margin-left:0%;
    margin-right:0%;
    margin-top:5%;
}
`;

const SignupButton = styled.button`
    width: 160px;
    height: 50px;
    margin: auto;
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 16px;
    background-color: #73C7FC;
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:hover {
        background-color: #fff; 
        color: #73C7FC;
        border: 1px solid #73C7FC;
    }
`;

const MobileStyledDiv = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
    flex-direction: column;
}
`;

const SignIn = () => {
    const route = useRouter();

  return (
    <div>
        <Header/>
        <div className='flex flex-col items-center pb-48'>
            <p style={{marginTop:'10%', marginBottom: '80px', color:'#60707D', fontSize:'40px', fontWeight: 'bold'}}>SIGN IN</p>
            <MobileStyledDiv className='flex flex-row content-around mobile-column'>
                <LeftColumn>
                    <Image src="/images/signup-bg.png" alt="First Image" />
                    <p style={{marginTop:'30px', color:'#60707D', fontSize:'20px', textAlign: 'center', marginLeft: '20px', marginRight: "20px"}}>Sign up now to Supreme e-commerce system and order your customized window.</p>
                    <p style={{marginTop:'100px', color:'#60707D', fontSize:'20px', textAlign: 'center', fontWeight: '600'}}>Don’t have an account?</p>
                    <SignupButton>
                        <FaUserPlus style={{ marginRight: '10px', fontSize: '17px'}} />
                        <span>SIGN UP</span>
                    </SignupButton>
                </LeftColumn>
                <RightColumn>
                    <ProfileImage src="/images/profile.svg" alt="Profile"/>
                    <SignInForm/>
                </RightColumn>
            </MobileStyledDiv>
        </div>
        <Footer/>
    </div>
  );
};

export default SignIn;
