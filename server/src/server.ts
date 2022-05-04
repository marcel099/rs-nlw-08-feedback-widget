import express from 'express';

import "./shared/container";
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!');
});
