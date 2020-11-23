import React from 'react';
import PropTypes from 'prop-types';
import { StyledLayout } from './Layout.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <Header />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
