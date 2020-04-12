import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppLowPerformance from './badperformance/AppBadPerformance';

function App() {
  return (
    <>
      <div>
        <Link to="/badperformance">Slow App</Link>
      </div>
      <div>
        <Link to="/gooperformance">Fast App</Link>
      </div>
      <Switch>
        <Route exact path="/badperformance" component={AppLowPerformance} />
        <Route path="/gooperformance" component={AppLowPerformance} />
      </Switch>
    </>
  );
}

export default App;
