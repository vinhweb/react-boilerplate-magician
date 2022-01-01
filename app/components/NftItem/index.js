/**
 *
 * NftItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import love from '../../images/icons/icon-park-outline_likesm.png';

function NftItem({ item }) {
  return (
    <li>
      <div className="relative">
        <img className="w-full" src={item.imgUrl} alt="" />
        <div className="absolute bottom-0 left-0 z-20 w-full flex items-end justify-between px-5 py-2">
          <div className="text-white">
            <p>{item.rank}</p>
            <a href="/detail" className="text-xl font-bold link">
              {item.title}
            </a>
          </div>
          <a href="/detail" className="link text-xl">
            <img src={love} alt="" />
          </a>
        </div>
      </div>
      <div className="bg-base">
        <div className="flex flex-wrap items-center justify-between py-5 px-4">
          <div className="leafBtnActive">{item.price}</div>
          <ul className="flex mt-3 lg:mt-0 flex-wrap space-x-3">
            <li>
              <a className="link" href="/detail">
                Buy NFT
              </a>
            </li>
            <li>
              <a className="mx-2 link-reverse" href="/detail">
                Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}

NftItem.propTypes = {
  item: PropTypes.object,
};

export default NftItem;
