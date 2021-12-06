import React from 'react';
import RepoListItem from './RepoListItem';

import './RepoList.css';

export function RepoList(props) {
  const { error, repos } = props;

  const errorComponent = (
    <React.Fragment>
      <h3>An error occurred</h3>
    </React.Fragment>
  );

  const reposListComponent = (
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
  );

  return (
    <React.Fragment>
      {error ? errorComponent : reposListComponent}
    </React.Fragment>
  );
}

export default RepoList;
