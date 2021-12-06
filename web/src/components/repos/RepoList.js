import React, { useState, useEffect } from 'react';
import RepoListItem from './RepoListItem';

import './RepoList.css';

const reposURL = 'http://localhost:4000/repos';

export function RepoList(props) {
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

  useEffect(() => {
    console.log(repos);
  }, [repos]);

  const errorComponent = (
    <React.Fragment>
      <h3>An error occurred</h3>
    </React.Fragment>
  );

  const reposListComponent = (
    <React.Fragment>
      {error ? (
        errorComponent
      ) : (
        <div className="repo-list">
          {repos.map((repo) => {
            return (
              <RepoListItem
                key={repo.id}
                name={repo.name}
                language={repo.language}
                forks_count={repo.forks_count}
                description={repo.description}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
  return <React.Fragment>{reposListComponent}</React.Fragment>;
}

export default RepoList;
