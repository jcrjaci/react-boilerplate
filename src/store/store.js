import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducer from '../reducers/reducer';

export default function configureStore(initialState) {
  const logger = createLogger();
  const history = createBrowserHistory();
  // middleware for intercepting and dispatching navigation actions
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = applyMiddleware(thunk, logger, reduxRouterMiddleware);

  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devTools } = window || {};
  const composeEnhancers = typeof window === 'object' && devTools ? devTools({}) : compose;

  const enhancer = composeEnhancers(middleware);
  const reducerConnect = connectRouter(history)(reducer);


  const store = createStore(reducerConnect, initialState, enhancer);

  return { store, history };
}
