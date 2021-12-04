import { Router, Request, Response } from 'express';
import axios from 'axios';
import { Repo } from '../typings/Repo';
import fs from 'fs';
import path from 'path';
// import { AppError } from '../typings/AppError';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  // 1) get all repos from github
  const response_github = await axios.get(
    'https://api.github.com/users/silverorange/repos'
  );
  const repos_github: Repo[] = response_github.data;

  // 2) get repositories from json
  const response_json = fs.readFileSync(
    path.resolve(__dirname, '../../data/repos.json')
  );
  const repos_json: Repo[] = JSON.parse(response_json.toString());

  // 3 merge respositories
  const all_repos: Repo[] = [...repos_github, ...repos_json];

  // 4) filter un-forked repositories
  const unforked_repos = all_repos.filter(function (repo: Repo) {
    return repo.fork === false;
  });

  res.header('Cache-Control', 'no-store');
  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json({
    status: 'success',
    length: unforked_repos.length,
    data: unforked_repos,
  });
});
