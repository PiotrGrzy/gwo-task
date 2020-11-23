import React from 'react';
import { Link } from 'react-router-dom';
import CartIndicator from '../CartIndicator';
import { StyledHeader, Logo } from './Header.styles';
import logo from '../../assets/images/logo-lg.png';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Link to="/">
          <Logo src={logo} alt="Gdańskie Wydawnictwo Oświatowe" />
        </Link>
        <Link to="/" className="link">
          Katalog
        </Link>
        <Link to="/cart">
          <CartIndicator />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
