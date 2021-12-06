import React from 'react';
import RepoDetail from '../components/repos/RepoDetail';
import Container from '@mui/material/Container';

const RepoDetailPage = (props) => {
  return (
    <div>
      <Container maxWidth="md">
        <RepoDetail repos={props.repos} error={props.error} />
      </Container>
    </div>
  );
};

export default RepoDetailPage;
