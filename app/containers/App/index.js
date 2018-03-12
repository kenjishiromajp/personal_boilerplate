import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import PostPage from '../PostPage/loadable';
import ContactPage from '../ContactPage/loadable';
import configureStore from '../../store';
import DefaultLayout from '../../layouts/DefaultLayout/index';
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
            <DefaultLayout exact path="/" component={PostPage} />
            <DefaultLayout exact path="/contact" component={ContactPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
