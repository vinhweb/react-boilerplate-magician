/**
 *
 * Detail
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import Layout from '../../components/Layout';
import imgUrl from '../../images/nft01.png';
import share from '../../images/icons/bx_bx-share.png';
import love from '../../images/icons/icon-park-outline_like.png';
import view from '../../images/icons/ep_view.png';

export function Detail() {
  const properties = [
    {
      title: 'Purple',
      sub: 'Background',
      desc: '2% have the same',
    },
    {
      title: 'Gem',
      sub: 'Pink',
      desc: '2% have the same',
    },
    {
      title: 'Race',
      sub: 'Armored',
      desc: '2% have the same',
    },
    {
      title: 'Weapon',
      sub: 'Magic Sword',
      desc: '2% have the same',
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Detail</title>
        <meta name="description" content="Description of Detail" />
      </Helmet>

      <Layout>
        <div className="container px-4 mx-auto">
          <div className="py-8 md:py-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 sm:col-span-12 lg:col-span-4">
                <img className="w-full" src={imgUrl} alt="" />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                <div>
                  <a href="/" className="link">
                    <i className="fas fa-arrow-left text-xs" /> Back
                  </a>
                  <div className="text-white my-14 mb-10">
                    <div>
                      <h1 className="text-3xl md:text-5xl">NFT NAME</h1>
                      <h3 className="text-xl mt-2 md:text-2xl">Rank 100</h3>
                    </div>
                    <ul className="flex mt-3 space-x-8">
                      <li>
                        <a className="link flex items-center text-lg" href="#">
                          <img src={love} alt="" />
                          &nbsp;
                          <span className="text-xs">1231</span>
                        </a>
                      </li>
                      <li>
                        <a className="link flex items-center text-lg" href="#">
                          <img src={view} alt="" />
                          &nbsp;
                          <span className="text-xs">1231</span>
                        </a>
                      </li>
                      <li>
                        <a className="link flex items-center text-lg" href="#">
                          <img src={share} alt="" />
                          &nbsp;
                          <span className="text-xs">123</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-10 lg:mt-16">
                <div className="mb-10 lg:mb-16">
                  <ul className="flex flex-wrap">
                    <li className="text-white mb-5 mr-14">
                      <p className="text-gray-300 text-sm">Author</p>
                      <div className="flex space-x-3 mt-3 items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full" />
                        <span className="text-xl">NameX</span>
                      </div>
                    </li>
                    <li className="text-white mb-5">
                      <p className="text-gray-300 text-sm">Author</p>
                      <div className="flex space-x-3 mt-3 items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full" />
                        <span className="text-xl">NameX</span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-300">
                    Date of creation: 20.02.21
                  </p>
                </div>

                <div>
                  <div className="leafBtnActive w-fit">123 BNB</div>
                  <div className="flex items-center mt-6">
                    <a href="#" className="mr-6 mainOutlineBtn">
                      Buy NFT
                    </a>
                    <a href="#" className="link text-lg mr-4">
                      <img src={love} alt="" />
                    </a>
                    <a href="#" className="link text-lg">
                      <img src={share} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 md:py-10">
            <h3 className="text-white text-lg mb-10">Properties</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {properties.map(item => (
                <li
                  key={item.title}
                  className="box-shadow bg-gray text-center p-3 cursor-pointer hover:opacity-75"
                >
                  <p className="text-gray-500">{item.sub}</p>
                  <h4 className="text-white text-xl my-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}

Detail.propTypes = {
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
)(Detail);
