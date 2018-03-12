import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Button, Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './style.less';
import MySidebar from './components/MySidebar';
import MyHeader from './components/MyHeader';
import { toggleSidebar } from './actions';
import { makeSelectSidebarOpened } from './selector';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  openSidebar = () => {
    this.props.toggleSidebar();
  }
  render() {
    const { openSidebar } = this;
    const { component: Component, sidebarOpened, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="default-layout">
            <Layout>
              <MySidebar opened={sidebarOpened} />
              <Layout>
                <MyHeader>
                  <Icon className="trigger" onClick={openSidebar} type={sidebarOpened ? 'menu-fold' : 'menu-unfold'} />
                  <h1>Loucura</h1>
                </MyHeader>
                <Content>
                  <Component {...matchProps} />
                </Content>
              </Layout>
            </Layout>
          </div>
        )}
      />
    );
  }
}

DefaultLayout.propTypes = {
  sidebarOpened: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.instanceOf(React.Component), PropTypes.func]).isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarOpened: makeSelectSidebarOpened(),
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DefaultLayout);
