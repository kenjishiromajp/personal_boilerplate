import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { compose } from 'redux';

import './fileLoads';
import './style.less';

import injectSaga from '../../utils/injectSaga';

import PostPage from '../PostPage/loadable';
import ContactPage from '../ContactPage/loadable';

import DefaultLayout from '../../layouts/DefaultLayout/index';
import PrivateDefaultLayout from '../../layouts/PrivateDefaultLayout/index';

import saga from './saga';

const Login = () => (
  <h1>Login!</h1>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateDefaultLayout exact path="/" component={PostPage} />
        <DefaultLayout exact path="/login" component={Login} />
        <DefaultLayout exact path="/contact" component={ContactPage} />
      </Switch>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });
export default compose(
  withSaga,
)(App);
