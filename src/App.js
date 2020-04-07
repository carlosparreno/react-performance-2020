import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppLowPerformance from './AppBadPerformance';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/badperformance" component={AppLowPerformance} />
        <Route path="/gooperformance" component={AppLowPerformance} />
      </Switch>
      <div>
        <Link to="/badperformance">Bad Performance App</Link>
      </div>
      <div>
        <Link to="/gooperformance">Good Performance App</Link>
      </div>
    </>
  );
}

export default App;
