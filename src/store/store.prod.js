import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducer from '../reducers/reducer';

export default function configureStore(initialState) {
  const history = createBrowserHistory();
  // middleware for intercepting and dispatching navigation actions
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = applyMiddleware(thunk, reduxRouterMiddleware);

  const reducerConnect = connectRouter(history)(reducer);
  const store = createStore(reducerConnect, initialState, middleware);

  return { store, history };
}
