import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt }) => {
  return (
    <header>
      <Logo src={logoSrc} alt={logoAlt} />
      <Navigation/>
    </header>
  );
};

export default Header;
