import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppLowPerformance from './badperformance/AppBadPerformance';

const Links = () => (
  <>
    <div>
      <Link to="/badperformance">Slow App</Link>
    </div>
    <div>
      <Link to="/gooperformance">Fast App</Link>
    </div>
  </>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Links} />
        <Route path="/badperformance" component={AppLowPerformance} />
        <Route path="/gooperformance" component={AppLowPerformance} />
      </Switch>
    </>
  );
}

export default App;
