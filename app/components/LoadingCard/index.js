/**
 *
 * LoadingCard
 *
 */

import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import './style.less';

const LoadingCard = ({ loading, children }) => (
  <Card
    loading={loading}
    className="card-no-padding card-no-border card-no-background"
  >
    {loading ? '' : children}
  </Card>
);

LoadingCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default LoadingCard;
