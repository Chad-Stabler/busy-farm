import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Farm from './Farm';
import Admin from './Admin';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Farm</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Farm />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
