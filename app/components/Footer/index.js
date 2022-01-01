/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import logo from '../../images/logo-sm.png';

function Footer() {
  return (
    <div>
      <footer className="border-t border-solid border-gray-800 mt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="sm:flex justify-between items-center">
            <div className="md:w-2/3">
              <ul className="flex flex-col md:flex-row ">
                <li>
                  <a className="link mr-12" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="link mr-12" href="#">
                    Terms of condition
                  </a>
                </li>
                <li>
                  <a className="link mr-12" href="#">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-5 md:w-1/3 md:ml-right sm:mt-4 md:mt-0">
              <div className="w-full flex flex-row-reverse md:flex-row justify-end items-end">
                <div className="copyright md:text-right text-sm text-gray-500 mx-3">
                  All rights rerserved
                  <br />
                  2021 MagicCraft Ltd
                </div>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
