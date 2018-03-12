import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Header } = Layout;
import './style.less';

const MyHeader = ({ children }) => (
  <Header className="my-header" >
    { children }
  </Header>
);
MyHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
export default MyHeader;
