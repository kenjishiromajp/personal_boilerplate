import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;
import './style.less';

const MyHeader = (props) => (
  <Header className="my-header" >
    <h1>Header Maroto</h1>
  </Header>
);
export default MyHeader;
