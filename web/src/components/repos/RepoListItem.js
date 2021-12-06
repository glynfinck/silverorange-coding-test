import React from 'react';
import { Link } from 'react-router-dom';

import './RepoListItem.css';

// repository name, description, language, and forks count in the list

const RepoListItem = (props) => {
  return (
    <li className="repo-list-item">
      <div className="repo-list-item-top">
        <div className="repo-list-item-name">
          <Link to={`/repos/${props.name}`}>{props.name}</Link>
        </div>
        <div className="repo-list-item-language">{props.language}</div>
      </div>
      <div className="repo-list-item-description">{props.description}</div>
      <div className="repo-list-item-bottom">
        Fork Count: {props.forks_count}
      </div>
    </li>
  );
};

export default RepoListItem;
