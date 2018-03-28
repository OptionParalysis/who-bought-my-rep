import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';

// containers

// components
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div className="site-wrapper">
        <main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);registerServiceWorker();
