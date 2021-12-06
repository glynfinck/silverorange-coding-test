import React from 'react';
import { useParams } from 'react-router-dom';

import './RepoDetail.css';

// 1) When you click a repository, display the most recent commit date, author, and message.
// 2) If the repository has a README.md file, it will be located at https://raw.githubusercontent.com/${repo.full_name}/master/README.md.
//    In this case, also render the Markdown content when clicking on the repository.
// 3) Include a way to return to the main list of repositories after you click on a repository.

const RepoDetail = (props) => {
  const { name } = useParams();

  return (
    <div className="repo-detail">
      <h2>{name}</h2>
      <div className="repo-detail-commit">
        <div className="repo-detail-commit-top">
          <div className="repo-detail-commit-detail-author">Author</div>
          <div className="repo-detail-commit-detail-date">Date Posted</div>
        </div>
        <div className="repo-detail-commit-description">
          A description of the commit
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
