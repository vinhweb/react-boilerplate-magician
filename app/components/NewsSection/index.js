/**
 *
 * NewsSection
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import news01 from '../../images/news/post (1).png';
import news02 from '../../images/news/post (2).png';
import news03 from '../../images/news/post (3).png';
import news04 from '../../images/news/post (4).png';
import NewsSectionItem from '../NewsSectionItem';

function NewsSection() {
  const news = [
    {
      imgUrl: news01,
      title: 'We have reached 5,300 holders',
      date: '21.12.21',
    },
    {
      imgUrl: news02,
      title: 'Soon we are launching on the new exhchange',
      date: '21.12.21',
    },
    {
      imgUrl: news03,
      title: 'New KOL is on board on the new',
      date: '21.12.21',
    },
    {
      imgUrl: news04,
      title: 'We have reached 24k followers ',
      date: '21.12.21',
    },
  ];
  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-5xl text-white">Lastest news</h3>
        <a href="#" className="link mt-3">
          Read more news <i className="fas fa-arrow-right text-xs" />
        </a>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 mb-6">
        {news.map(item => (
          <NewsSectionItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}

NewsSection.propTypes = {};

export default memo(NewsSection);
