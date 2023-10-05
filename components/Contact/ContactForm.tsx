import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CenteredContent = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
  margin-top: 10%;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    margin-top:20%;
    margin-left:10%;
    width:80%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  margin-top:70%;
  margin-bottom:40%;
}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #60707D;
  font-family: "Raleway", sans-serif;
  margin-bottom: 50px;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 200px; 
  
  
 
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  
  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
height:100%;
}
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 80px 20px;
  border-radius: 8px;
  background: rgba(96,112,125,0.5);

  @media (max-width: 768px) {
    background: rgba(96,112,125,0.5);
    max-height: 200px;
    padding: 70px 0px;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
padding: 50px 0px;
}
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4; 
  padding: 20px;
  width: 905px; 

  @media (max-width: 768px) {
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    margin-top:2%;
    width:100%;
    margin-bottom:50%;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {


  .div1{
    display: flex;
    flex-direction: column;
    border-radius: 0px;
  }

  .div2{
    display: flex;
    flex-direction: column;
    border-radius: 0px;
  }
}
`;

const FormField = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  width: 100%;
  flex: 1;
  margin-right:10%;
  margin-left:5%;

   @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  margin-left:0px;
  border-radius:0px;
}
  @media (max-width: 768px) {
    border-radius:0px; 
  }
`;
const FormField2 = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  width: 100%;
  flex: 1;
  margin-right:10%;
  margin-left:5%;
  flex: 1;
  margin-right: 10%;
  margin-left:5%;
  
   @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  margin-left:0px;
  border-radius:0px;
}
  @media (max-width: 768px) {
    border-radius:0px; 
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #CBCBC9;
  font-family: "Raleway", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  height: calc(0.5em + 1.3rem + 2px);
  padding: 6.5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: 0 1px 13px rgba(0, 0, 0, 0.17);
    box-shadow: 0 1px 13px rgba(0, 0, 0, 0.17);
    background-color: #fff;
    border-bottom: 3px solid #73C7FC;
  }

  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  border-radius:0px;
  
}
`;

const TextArea = styled.textarea`
  width: 100%; 
  padding: 2px;
  font-size: 16px;
  height: calc(2.5em + 2.3rem + 250px);
`;

const Button = styled.button`
  background-color: #73C7FC;
  color: white;
  font-size: 15px;
  line-height: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;
  width: 15%;
  margin-left: 40%;


  @media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
  width: 30%;
  padding: 0px
}
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <div className="div1" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormField >
          <Label>Name</Label>
          <Input type="name" name="name"  />
        </FormField>

        <FormField style={{ flex: '1',marginRight: '5%' }}>
          <Label>Phone Number</Label>
          <Input type="tel" name="phone"  />
        </FormField>
      </div>

      <div className="div2" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormField2 >
          <Label>Email</Label>
          <Input type="email" name="email"  />
        </FormField2>

        <FormField style={{ flex: '1',marginRight: '5%' }}>
          <Label>Address</Label>
          <Input type="address" name="address"  />
        </FormField>
      </div>

      <FormField style={{ flex: '1', width: '90%',marginLeft:'5%' }}>
        <Label>Your Message</Label>
        <TextArea name="message" rows={4} ></TextArea>
      </FormField>

      <Button type="submit">Send</Button>
    </FormContainer>

  );
};

const CenteredContactForm = () => {
  return (
    <CenteredContent>
      <Title>CONTACT US</Title>
      <ImageContainer>
        <Image src="/images/contact-us.png" alt="Contact Image" />
        <OverlayText>KEEP IN TOUCH</OverlayText>
      </ImageContainer>
      <ContactForm />
    </CenteredContent>
  );
};

export default CenteredContactForm;
