import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppLowPerformance from './badperformance/AppBadPerformance';
import AppEnhancement1 from './enhancement1/AppEnhancement1';

const Links = () => (
  <>
    <div>
      <Link to="/badperformance">Slow App</Link>
    </div>
    <div>
      <Link to="/enhancement1">Enhancement 1 - Atomic Design</Link>
    </div>
  </>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Links} />
        <Route path="/badperformance" component={AppLowPerformance} />
        <Route path="/enhancement1" component={AppEnhancement1} />
        <Route path="/enhancement2" component={AppLowPerformance} />
        <Route path="/enhancement3" component={AppLowPerformance} />
      </Switch>
    </>
  );
}

export default App;
