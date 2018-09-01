import React from 'react';

import { render } from 'react-dom';
import Root from './containers/Root/Root';
import configureStore from './store/store';

render(<Root {...configureStore()} />, document.getElementById('index'));
