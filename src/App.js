import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppLowPerformance from './badperformance/AppBadPerformance';
import AppEnhancement1 from './enhancement1/AppEnhancement1';
import AppEnhancement2 from './enhancement2/AppEnhancement2';
import AppEnhancement3 from './enhancement3/AppEnhancement3';
import './Home.scss';

const Links = () => (
  <div className="home">
    <div className="links">
      <Link to="/badperformance">Slow App</Link>
      <Link to="/enhancement1">Enhancement 1 - Atomic Design</Link>
      <Link to="/enhancement2">Enhancement 2 - Avoid reconciliation</Link>
      <Link to="/enhancement3">{`Enhancement 3 - Watch out for Object Literals {{`}</Link>
    </div>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Links} />
        <Route path="/badperformance" component={AppLowPerformance} />
        <Route path="/enhancement1" component={AppEnhancement1} />
        <Route path="/enhancement2" component={AppEnhancement2} />
        <Route path="/enhancement3" component={AppEnhancement3} />
      </Switch>
    </>
  );
}

export default App;
