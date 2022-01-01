/**
 *
 * Post
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export function Post() {
  return (
    <div>
      <Helmet>
        <title>Post</title>
        <meta name="description" content="Description of Post" />
      </Helmet>
    </div>
  );
}

Post.propTypes = {
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
)(Post);
