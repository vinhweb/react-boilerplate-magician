/**
 *
 * NftItemMore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import lock from '../../images/icons/lock2.png';
// import styled from 'styled-components';

function NftItemMore({ item }) {
  return (
    <li>
      <div className="flex items-center p-3 h-full border border-solid border-white">
        <div>
          <div className="mb-8 text-center">
            <h4 className="text-3xl text-white mb-2 mt-5">
              Wanna become a creator?
            </h4>
            <p className="text-gray-500">Coming soon</p>
          </div>
          <a
            href="#"
            className="mainDisabledBtn2 block mx-auto flex items-center justify-center"
          >
            Sell my NFT <img src={lock} alt="" />
          </a>
        </div>
      </div>
    </li>
  );
}

NftItemMore.propTypes = {
  item: PropTypes.object,
};

export default NftItemMore;
