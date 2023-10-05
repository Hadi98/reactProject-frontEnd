import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import {CiCircleRemove} from 'react-icons/ci';
import { IoLogOutOutline } from 'react-icons/io5';

const ProfileWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom:5%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10%;
  color: #60707D;
`;

const EditProfileButton = styled.button`
  background-color: #73c7fc;
  color: #fff;
  border-color: #73c7fc;
  padding: 18px 56px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 17px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background-color: white;
    color:#73c7fc;
    border: 1px solid #73c7fc;
  }
`;

const FormContainer = styled.div`
  display: flex;
  margin-top: 20px;

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  display: flex;
  flex-direction:column;
}
`;

const LeftBox = styled.div`

  width: 48%;
  border: 1px solid #ccc;
  padding: 1.95vw;
    padding-top: 40px;
    padding-bottom: 40px;
  text-align: center;
  position: relative;
  box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);

  .cancel{
    margin-left:50%;
    margin-top:-6%;
    border: 1px solid #ccc;
    padding: 12px 20px;
    width:10%;
    font-size: 12px;
    line-height: 24px;
    border-radius: 0px;
    box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  width:100%;
}
`;

const CancelDiv = styled.div`
  margin-left: 50%;
  margin-top: -6%;
  border: 1px solid black; 
  padding: 12px 20px;
  width: 10%;
  font-size: 12px;
  line-height: 24px;
  border-radius: 0px;
  box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer; 

  &:before {
    content: 'Cancel avatar'; 
    display: none;
    position: absolute;
    bottom: 85%; 
    left: 58%;
    transform: translateX(-50%);
    background-color: #73c7fc; 
    color: #fff; 
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
  }

  &:hover:before {
    display: block; 
  }
  `;

const ChooseFile = styled.div`
position: relative;
border: 1px solid black; 
padding: 12px 20px;
width: 50%;
font-size: 12px;
line-height: 24px;
border-radius: 0px;
box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);
cursor: pointer; 

&:before {
  content: 'Change Avatar'; 
  display: none;
  position: absolute;
  top: -40px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #73c7fc; 
  color: #fff; 
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
}

&:hover:before {
  display: block; 
}
`;

const RightBox = styled.div`
  width: 48%;
  border: 1px solid #fff;
  padding: 1.95vw;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f5f5f5;
  box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);


  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  width:100%;
}
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border: 1px solid #e4e6ef;
`;

const Radios = styled.div`
  margin-top: 20px;
  display: flex;
  color: #cbcbc9;
`;

const RadioLabel = styled.label`
  
  align-items: start;
  
`;

const SaveButton = styled.button`
  background-color: #73c7fc;
  color: #fff;
  padding: 18px 56px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  box-shadow: 0 9px 21px 0 rgba(0, 0, 0, 0.15);
  border: 1px solid #73c7fc;

  &:hover {
    background-color: white;
    color: #73c7fc;
    border: 1px solid #73c7fc; 
  }
`;

const LogoutButton = styled.button`
  background-color: white;
  color: #ffc107; 
  border: 1px solid #60707D;
  padding: 18px 70px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  font-size: 17px;
  line-height: 17px;

  &:hover {
    background-color: #ffc107;
    color: black;
    border:none;
  }
`;



const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
  };

  const handleMouseEnter = (event) => {
    setShowTooltip(true);
    setTooltipPosition({
      top: event.clientY + 1, 
      left: event.clientX + 1, 
    });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  


  return (
    <ProfileWrapper>
      <Title>MY PROFILE</Title>
      <EditProfileButton>EDIT PROFILE</EditProfileButton>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <LeftBox>
          
            <ChooseFile  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <FiEdit style={{marginLeft:'100px',marginBottom:'10px'}}/>
            <input
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected File:</p>
          <p>Name: {selectedFile.name}</p>
          <p>Size: {selectedFile.size} bytes</p>
          <p>Type: {selectedFile.type}</p>
        </div>
      )}
            </ChooseFile>
            <CancelDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <CiCircleRemove/>
              </CancelDiv>
            <p style={{display:'flex'}}>Allowed file types: png, jpg, jpeg.</p>
            <LogoutButton><IoLogOutOutline/>Logout</LogoutButton>
            
          </LeftBox>
          
          <RightBox>
            <label htmlFor="FULL NAME" style={{color: '#cbcbc9',display:'flex'}}>FULL NAME</label>
            <FormInput type="name"  />
            <label htmlFor="E-MAIL" style={{color: '#cbcbc9',display:'flex'}}>E-MAIL</label>
            <FormInput type="email"  />
            <label htmlFor="PHONE" style={{color: '#cbcbc9',display:'flex'}}>PHONE</label>
            <FormInput type="tel"  />
            <label htmlFor="ADDRESS" style={{color: '#cbcbc9',display:'flex'}}>ADDRESS</label>
            <FormInput type="address"  />
            <Radios>
              <RadioLabel>
                <input type="radio" name="taxStatus" value="taxExempted" />
                Tax Exempted
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="taxStatus" value="taxed" style={{marginLeft:'10px'}}/>
                Taxed
              </RadioLabel>
            </Radios>
            <SaveButton>SAVE</SaveButton>
          </RightBox>
        </FormContainer>
      </form>
      
    </ProfileWrapper>
  );
};

export default Profile;
