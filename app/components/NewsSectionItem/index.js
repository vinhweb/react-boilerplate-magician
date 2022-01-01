/**
 *
 * NewsSectionItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NewsSectionItem({ item }) {
  return (
    <li className="bg-base">
      <img className="w-full" src={item.imgUrl} />
      <div className="p-4 pr-2 pb-3 space-y-2">
        <a href="#" className="text-xl link">
          {item.title}
        </a>
        <div className="flex justify-between">
          <div className="text-gray-500">{item.date}</div>
          <div className="sharePlace relative">
            <a className="link-reverse" href="#">
              <i className="fas fa-share" />
            </a>
            <div className="list absolute -right-2 pt-3">
              <ul className="box-shadow">
                <li className="m-2 leading-none">
                  <a className="link" href="#">
                    <i className="fab fa-twitter-square" />
                  </a>
                </li>
                <li className="m-2 leading-none">
                  <a className="link" href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li className="m-2 leading-none">
                  <a className="link" href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

NewsSectionItem.propTypes = {
  item: PropTypes.object,
};

export default memo(NewsSectionItem);
