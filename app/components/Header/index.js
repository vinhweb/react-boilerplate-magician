/**
 *
 * Header
 *
 */

import React, { memo, useRef, useState } from 'react';
import logo from '../../images/logo-sm.png';
import lock from '../../images/icons/lock.png';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  const [mobileClass, setMobileClass] = useState('hidden');
  const onButtonClick = () => {
    mobileClass === 'hidden'
      ? setMobileClass('flex')
      : setMobileClass('hidden');
  };

  return (
    <div>
      <nav className="py-2 md:py-5">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="/" className="w-20 font-bold text-xl text-indigo-600 mr-4">
              <img src={logo} alt="" />
            </a>
            <button
              onClick={onButtonClick}
              className="border border-solid  px-3 py-1 rounded border-gray-200 text-gray-200 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars" />
            </button>
          </div>

          <div
            id="navbar-collapse"
            className={`${mobileClass} flex-col md:flex-row md:justify-between md:items-center w-full md:flex`}
          >
            <div className="flex flex-col md:flex-row md:mr-auto mt-3 md:mt-0">
              <a href="/marketplace" className="p-2 lg:px-4 md:mx-2 link">
                Marketplace
              </a>
              <a href="#" className="p-2 lg:px-4 md:mx-2 link">
                Staking
              </a>
              <a
                href="#"
                className="p-2 lg:px-4 md:mx-2 disabledLink flex items-center justify-cente"
              >
                News <img src={lock} alt="" />
              </a>
            </div>
            <div className="flex">
              <a href="#" className="mainBtn">
                Collect Wallet
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
