/**
 *
 * Marketplace
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import InputRange from 'react-input-range';
import Layout from '../../components/Layout';
import HeaderFeature from '../../components/HeaderFeature';
import NewsSectionItem from '../../components/NewsSectionItem';
import nft01 from '../../images/nft01.png';
import nft02 from '../../images/nft02.png';
import nft03 from '../../images/nft03.png';
import NftItemSm from '../../components/NftItemSm';

export function Marketplace() {
  const market = [
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
    {
      imgUrl: nft03,
      rank: 'Rank #1',
      title: 'NAME OF NFT',
      price: '123 BNB',
    },
  ];

  const filterHeroes = [
    {
      name: 'Distance fighers',
      slug: 'fighter',
    },
    {
      name: 'Druids',
      slug: 'druid',
    },
    {
      name: 'Armored',
      slug: 'armor',
    },
    {
      name: 'Wizards',
      slug: 'wizard',
    },
    {
      name: 'Challengers',
      slug: 'challenger',
    },
  ];

  const filterNfts = [
    {
      name: 'Characters',
      slug: 'Characters',
    },
    {
      name: 'Lands',
      slug: 'Lands',
    },
    {
      name: 'Items',
      slug: 'Items',
    },
  ];

  const [rangeVal, setRangeVal] = useState({
    min: 3,
    max: 7,
  });

  const changeRangeVal = e => {
    e.persist();
    const { name, value } = e.target;
    setRangeVal({
      ...rangeVal,
      [name]: +value,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Marketplace</title>
        <meta name="description" content="Description of Marketplace" />
      </Helmet>
      <Layout>
        <div className="container px-4 mx-auto">
          <div className="py-8 md:py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h3 className="text-5xl text-white">Marketplace</h3>
              <div />
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="col-span-1 mt-14 mb-6">
                <div className="border-t border-solid border-gray-500">
                  <div className="p-5">
                    <label className="text-white text-lg" htmlFor="#year">
                      Year&nbsp;
                      <a href="#">
                        <i className="text-xs fas fa-chevron-down" />
                      </a>
                    </label>
                    <div className="mt-3">
                      <input
                        className="block w-16 inputStyle2"
                        type="text"
                        value="2021"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-solid border-gray-500">
                  <div className="p-5">
                    <label className="text-white text-lg">
                      Type of heroes&nbsp;
                      <a href="#">
                        <i className="text-xs fas fa-chevron-down" />
                      </a>
                    </label>
                    <div className="mt-3">
                      <ul className="flex flex-col space-y-4 mt-5">
                        {filterHeroes.map(item => (
                          <li key={item.name} className="check-field">
                            <input
                              type="checkbox"
                              id={item.slug}
                              name={item.slug}
                            />
                            <label
                              className="text-white pl-10 pt-3"
                              htmlFor={item.slug}
                            >
                              {' '}
                              {item.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-solid border-gray-500">
                  <div className="p-5">
                    <label className="text-white text-lg">
                      Price range&nbsp;
                      <a href="#">
                        <i className="text-xs fas fa-chevron-down" />
                      </a>
                    </label>
                    <div className="mt-5">
                      <InputRange
                        draggableTrack
                        maxValue={20}
                        minValue={0}
                        onChange={value => setRangeVal(value)}
                        onChangeComplete={value => setRangeVal(value)}
                        value={rangeVal}
                      />
                    </div>

                    <div className="flex flex-wrap items-center space-x-3 mt-5">
                      <input
                        className="block md:w-16 xl:w-24  inputStyle"
                        name="min"
                        onChange={e => changeRangeVal(e)}
                        type="number"
                        value={rangeVal.min}
                      />
                      <div className="border-t border-solid border-white w-4" />
                      <input
                        className="block md:w-16 xl:w-24  inputStyle"
                        name="max"
                        onChange={changeRangeVal}
                        type="number"
                        value={rangeVal.max}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-solid border-gray-500">
                  <div className="p-5">
                    <label className="text-white text-lg">
                      Type of NFT&nbsp;
                      <a href="#">
                        <i className="text-xs fas fa-chevron-down" />
                      </a>
                    </label>
                    <div className="mt-3">
                      <ul className="flex flex-col space-y-4 mt-5">
                        {filterNfts.map(item => (
                          <li key={item.name} className="check-field">
                            <input
                              type="checkbox"
                              id={item.slug}
                              name={item.slug}
                            />
                            <label
                              className="text-white pl-10 pt-3"
                              htmlFor={item.slug}
                            >
                              {' '}
                              {item.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="flex justify-end items-center space-x-5">
                  <p className="text-white">Sort by</p>
                  <select className="inputStyle2" name="price" id="price">
                    <option value="">Price</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <select className="inputStyle2" name="date" id="date">
                    <option value="">Date</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>

                <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-6 mb-6">
                  {market.map((item, index) => (
                    <NftItemSm key={item.title + index} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

Marketplace.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Marketplace);
