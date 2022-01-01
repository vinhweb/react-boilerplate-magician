/**
 *
 * Layout
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
// import styled from 'styled-components';

function Layout({ children }) {
  return (
    <Fragment>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Header />
          <div className="container mx-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
