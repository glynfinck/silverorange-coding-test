import React, { useState, useEffect } from 'react';

import './App.css';
import RepoListPage from './pages/RepoListPage';
import RepoDetailPage from './pages/RepoDetailPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const reposURL = 'http://localhost:4000/repos';

export function App() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  // initial load
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await fetch(reposURL);
        const response_json = await response.json();
        setRepos(response_json.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/repos/:name">
            <RepoDetailPage repos={repos} error={error} />
          </Route>
          <Route path="/repos">
            <RepoListPage repos={repos} error={error} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
