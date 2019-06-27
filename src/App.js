import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { routerHistory, store } from './store';

import TimeDisplay from './components/TimeDisplay';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <Switch>
          <Route path="/" component={TimeDisplay}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
