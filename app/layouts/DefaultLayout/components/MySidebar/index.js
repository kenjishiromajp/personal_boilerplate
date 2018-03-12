import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
const { Sider } = Layout;

class MySidebar extends Component {
  render() {
    const { opened } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={!opened}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/contact">
              <Icon type="phone" />
              <span>Contact</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
MySidebar.propTypes = {
  opened: PropTypes.bool.isRequired,
};
export default MySidebar;
