import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="wrapper">
      <Navigation />
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
