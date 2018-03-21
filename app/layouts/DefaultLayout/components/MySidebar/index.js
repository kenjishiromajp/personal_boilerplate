import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import MyMenuItem from '../MyMenuItem/index';
import getMenuItems from './getMenuItems';
const { Sider } = Layout;
const MenuItem = Menu.Item;

class MySidebar extends Component {
  renderMenuItems() {
    return getMenuItems().map((menuItem) => (
      <MenuItem key={menuItem.to}>
        <MyMenuItem {...menuItem} />
      </MenuItem>
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
