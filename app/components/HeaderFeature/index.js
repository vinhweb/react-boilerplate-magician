/**
 *
 * HeaderFeature
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import reward01 from '../../images/rewards/reward (1).png';
import reward02 from '../../images/rewards/reward (2).png';
import reward03 from '../../images/rewards/reward (3).png';
import lock from '../../images/icons/lock2.png';

function HeaderFeature() {
  const features = [
    {
      amount: '1M',
      name: 'market cap',
    },
    {
      amount: '77k',
      name: 'creations',
    },
    {
      amount: '430k',
      name: 'buyers',
    },
    {
      amount: '0',
      name: 'artists',
    },
  ];

  const rewards = [
    {
      image: reward01,
      name: 'NFT Contest',
      readMore: 'Read more',
    },
    {
      image: reward02,
      name: 'Trending NFTs',
      readMore: 'View more',
    },
    {
      image: reward03,
      name: 'New NFTs',
      readMore: 'View more <i className="fas fa-arrow-right text-xs"></i>',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 py-8 md:py-12 items-center">
      <div>
        <ul className="flex space-x-12">
          {features.map(item => (
            <li
              className={`text-white ${item.name === 'artists' &&
                'text-gray-500'}`}
              key={item.name}
            >
              <div className="text-lg leading-none">{item.amount}</div>
              <div className="text-sm">{item.name}</div>
            </li>
          ))}
        </ul>
        <div className="text-white mt-8 mb-12">
          <h1 className="text-7xl leading-snug">Buy and sell NFT</h1>
          <h3 className="text-4xl">using $MCRT</h3>
        </div>
        <div className="flex space-x-8">
          <a href="/marketplace" className="mainBtn">
            Marketplace
          </a>
          <a
            href="#"
            className="mainDisabledBtn flex items-center justify-center"
          >
            Sell NFT <img src={lock} alt="" />
          </a>
        </div>
      </div>

      <div>
        <ul className="flex space-x-8 md:justify-end my-10 md:my-0">
          {rewards.map(item => (
            <li key={item.name}>
              <div className="text-right">
                <img className="mb-3" src={item.image} />
                <a
                  className="link"
                  href="#"
                  dangerouslySetInnerHTML={{ __html: item.readMore }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

HeaderFeature.propTypes = {};

export default HeaderFeature;
