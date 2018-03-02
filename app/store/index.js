import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer} from 'react-router-redux';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(...middlewares)
);
