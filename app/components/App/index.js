import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostPage from '../../containers/PostPage/loadable';
import ContactPage from '../../containers/ContactPage/loadable';

const initialState = {};
const store = {
  ...initialState,
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PostPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
