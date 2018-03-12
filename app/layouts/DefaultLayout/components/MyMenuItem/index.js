import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
const MyMenuItem = ({ to, icon, title }) => (
  <Link to={to}>
    <Icon type={icon} />
    <span>{title}</span>
  </Link>
);
MyMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MyMenuItem;
