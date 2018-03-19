import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';
import { makeSelectCurrentUser } from '../../containers/App/selectors';

class PrivateDefaultLayout extends React.Component {
  authenticated() {
    return true;
    // return !!this.props.user.size;
  }
  render() {
    if (!this.authenticated()) return <Redirect to="/login" />;
    const { component: Component, ...rest } = this.props;
    return <DefaultLayout {...rest} component={Component} />;
  }
}

PrivateDefaultLayout.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps);
export default compose(withConnect)(PrivateDefaultLayout);
