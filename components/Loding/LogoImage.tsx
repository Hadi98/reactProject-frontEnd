import React from 'react';

interface LogoImageProps {
  src: string;
  alt: string;
}

const LogoImage: React.FC<LogoImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default LogoImage;
