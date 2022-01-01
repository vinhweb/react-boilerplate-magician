/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import messages from './messages';
import Layout from '../../components/Layout';
import HeaderFeature from '../../components/HeaderFeature';
import NewsSection from '../../components/NewsSection';
import NftTrending from '../../components/NftTrending';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Description of Marketplace" />
      </Helmet>
      <Layout>
        <div className="container px-4 mx-auto">
          <HeaderFeature />
          <NewsSection />
          <NftTrending />
        </div>
      </Layout>
    </div>
  );
}
