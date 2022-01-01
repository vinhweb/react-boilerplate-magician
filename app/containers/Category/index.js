/**
 *
 * Category
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export function Category() {
  return (
    <div>
      <Helmet>
        <title>Category</title>
        <meta name="description" content="Description of Category" />
      </Helmet>
    </div>
  );
}

Category.propTypes = {
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
)(Category);
