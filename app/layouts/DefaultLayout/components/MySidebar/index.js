import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import MyMenuItem from '../MyMenuItem/index';
import getMenuItems from './getMenuItems';
const { Sider } = Layout;

class MySidebar extends Component {
  renderMenuItems() {
    return getMenuItems().map((menuItem) => (
      <Menu.Item key={menuItem.to}>
        <MyMenuItem {...menuItem} />
      </Menu.Item>
    ));
  }
  render() {
    const { opened, currentPath } = this.props;
    return (
      <Sider trigger={null} collapsible collapsed={!opened}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[currentPath]}>
          {this.renderMenuItems()}
        </Menu>
      </Sider>
    );
  }
}
MySidebar.propTypes = {
  currentPath: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
};
export default MySidebar;
