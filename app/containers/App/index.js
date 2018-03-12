import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../LoginPage/loadable';
import PostPage from '../PostPage/loadable';
import ContactPage from '../ContactPage/loadable';
import configureStore from '../../store';
import DefaultLayout from '../../layouts/DefaultLayout/index';
import PrivateDefaultLayout from '../../layouts/PrivateDefaultLayout/index';
import './fileLoads';
import './style.less';

const history = createHistory();
const initialState = {};

const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <PrivateDefaultLayout exact path="/" component={PostPage} />
            <Route exact path="/login" component={LoginPage} />
            <DefaultLayout exact path="/contact" component={ContactPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
