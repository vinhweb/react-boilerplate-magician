/**
 *
 * NftTrending
 *
 */

import React from 'react';
import nft01 from '../../images/nft01.png';
import nft02 from '../../images/nft02.png';
import nft03 from '../../images/nft03.png';
import banner from '../../images/banner.png';
import NftItem from '../NftItem';
import NftItemMore from '../NftItemMore';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NftTrending() {
  const trending = [
    {
      imgUrl: nft01,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft02,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft03,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft01,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft02,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
  ];
  const drops = [
    {
      imgUrl: nft01,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft02,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
    {
      imgUrl: nft03,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
  ];
  return (
    <div>
      <div className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-5xl text-white">Trending</h3>
          <a href="#" className="link mt-3">
            View all NFTs <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-14 mb-6">
          {trending.map((item, index) => (
            <NftItem key={item.title + item.index} item={item} />
          ))}
          <NftItemMore />
        </ul>
      </div>

      <div className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-5xl text-white">Drops from MagicCraft</h3>
          <a href="#" className="link mt-3">
            View all NFTs <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-14 mb-6">
          {drops.map((item, index) => (
            <NftItem key={item.price + item.index} item={item} />
          ))}
        </ul>
      </div>

      <div className="py-8 pt-0 md:py-12 md:pt-0 ">
        <img className="mx-auto" src={banner} alt="" />
      </div>
    </div>
  );
}

NftTrending.propTypes = {};

export default NftTrending;
