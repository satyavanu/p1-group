import React from 'react';

interface LogoProps {
  alt: string;
  src: string;
}

const Logo: React.FC<LogoProps> = ({ alt, src }) => {
  return (
    <img src={src} alt={alt} />
  );
};

export default Logo;