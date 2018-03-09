import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
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
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <div className="default-layout">
            <Layout>
              <MySidebar opened={this.props.sidebarOpened} />
              <Layout>
                <MyHeader />
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
  component: PropTypes.oneOfType([PropTypes.instanceOf(React.Component), PropTypes.func]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebarOpened: makeSelectSidebarOpened(),
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: () => dispatch(toggleSidebar()),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DefaultLayout);
