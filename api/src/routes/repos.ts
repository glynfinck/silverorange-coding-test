import { Router, Request, Response } from 'express';
import axios from 'axios';
import { Repo } from '../typings/Repo';
// import { AppError } from '../typings/AppError';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  // 1) get all repos
  const response = await axios.get(
    'https://api.github.com/users/silverorange/repos'
  );
  const repositories = response.data;

  // 2) filter un-forked repositories
  const unforked_repositories = repositories.filter(function (repo: Repo) {
    return repo.fork === false;
  });

  res.header('Cache-Control', 'no-store');
  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json({
    status: 'success',
    length: unforked_repositories.length,
    data: unforked_repositories,
  });
});
