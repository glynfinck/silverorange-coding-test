import React from 'react';

import './App.css';
import RepoListPage from './pages/RepoListPage';
import RepoDetailPage from './pages/RepoDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/repos/:name" element={<RepoDetailPage />} />
          <Route path="/repos" element={<RepoListPage />} />
        </Routes>
      </Router>
    </div>
  );
}
