import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import './RepoDetail.css';

// 1) When you click a repository, display the most recent commit date, author, and message.
// 2) If the repository has a README.md file, it will be located at https://raw.githubusercontent.com/${repo.full_name}/master/README.md.
//    In this case, also render the Markdown content when clicking on the repository.
// 3) Include a way to return to the main list of repositories after you click on a repository.

const RepoDetail = (props) => {
  const { name } = useParams();
  const { repos } = props;
  const [readme, setReadme] = useState(null);

  const repo = repos.find((repository) => {
    return repository.name === name;
  });

  useEffect(() => {
    async function fetchAsync(repoName) {
      const response = await fetch(
        `https://raw.githubusercontent.com/${repoName}/master/README.md`
      );
      const text = await response.text();
      setReadme(text);
    }
    if (repo) {
      fetchAsync(repo.full_name);
    }
  }, [repo]);

  if (repo) {
    return (
      <div className="repo-detail">
        <Link to="/repos">Back</Link>
        <h2>{name}</h2>
        <div className="repo-detail-commit">
          <div className="repo-detail-commit-top">
            <div className="repo-detail-commit-picture">
              <Avatar src={repo.owner.avatar_url} />
            </div>
            <div className="repo-detail-commit-detail-author">
              <h3>{repo.owner.login}</h3>
            </div>
            <div className="repo-detail-commit-detail-date">
              <h3> {repo.updated_at}</h3>
            </div>
          </div>
          <div className="repo-detail-commit-description">
            <p> {repo.description}</p>
          </div>
        </div>
        <div className="repo-detail-readme">
          <div className="repo-detail-readme-content">
            <ReactMarkdown children={readme} />,
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <h1>No repository with name {name} found.</h1>
      </React.Fragment>
    );
  }
};

export default RepoDetail;
