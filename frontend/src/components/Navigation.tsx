import React from 'react';
import NavigationLink from './NavigationLink';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <NavigationLink to="/" label="Home" />
        <NavigationLink to="/list" label="List" />
      </ul>
    </nav>
  );
};

export default Navigation;