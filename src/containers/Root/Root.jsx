import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../Routes';

/** Root component
* @param {object} props Component props
* @param {array} store Redux store.
* @param {array} history Route history.
*/
const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {routes}
      </div>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Root;
