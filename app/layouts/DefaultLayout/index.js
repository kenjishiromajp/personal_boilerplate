import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Icon, Layout } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './style.less';
import MySidebar from './components/MySidebar';
import MyHeader from './components/MyHeader';
import { toggleSidebar } from './actions';
import { makeSelectSidebarOpened } from './selector';
import { makeSelectLocation } from '../../containers/App/selectors';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  openSidebar = () => {
    this.props.toggleSidebar();
  }
  render() {
    const { openSidebar } = this;
    const { component: Component, location, sidebarOpened, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="default-layout">
            <Layout>
              <MySidebar currentPath={location.pathname} opened={sidebarOpened} />
              <Layout>
                <MyHeader>
                  <Icon className="trigger" onClick={openSidebar} type={sidebarOpened ? 'menu-fold' : 'menu-unfold'} />
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
  location: PropTypes.object.isRequired,
  sidebarOpened: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.instanceOf(React.Component), PropTypes.func]).isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarOpened: makeSelectSidebarOpened(),
  location: makeSelectLocation(),
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DefaultLayout);
