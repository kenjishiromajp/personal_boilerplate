import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

class MySidebar extends Component {
  render() {
    return(
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.sidebarOpened}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default MySidebar;
