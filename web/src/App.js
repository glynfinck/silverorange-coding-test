import React from 'react';

import './App.css';
import RepoListPage from './pages/RepoListPage';
import RepoDetailPage from './pages/RepoDetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/repos/:name">
            <RepoDetailPage />
          </Route>
          <Route path="/repos">
            <RepoListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
