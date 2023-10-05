import React from 'react';
import LogoImage from '../Loding/LogoImage';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <CenteredContainer>
      <LogoImage src="/images/supreme.gif" alt="Logo" />
    </CenteredContainer>
  );
};

export default Loading;
