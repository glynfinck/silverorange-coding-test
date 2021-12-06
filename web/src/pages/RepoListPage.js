import React from 'react';
import RepoList from '../components/repos/RepoList';
import Container from '@mui/material/Container';

const RepoListPage = (props) => {
  return (
    <div>
      <Container maxWidth="md">
        <RepoList repos={props.repos} error={props.error} />
      </Container>
    </div>
  );
};

export default RepoListPage;
