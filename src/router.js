import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { routerHistory } from './store';
import TimeDisplay from './components/TimeDisplay';

class Router extends React.Component {
  render() {
    return (
      <ConnectedRouter history={routerHistory}>
        <Switch>
          <Route path="/" component={TimeDisplay}/>
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Router;