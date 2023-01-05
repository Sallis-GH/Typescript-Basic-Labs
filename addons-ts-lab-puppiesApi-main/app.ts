import express from 'express';
import data from './db'
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

// app.get('/api/test', (_req: Request, res: Response) => {
//   return res.status(200).json({ test: 'is working as it should' });
// });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/api/puppies')
  .get((_req: Request, res: Response) => {
    return res.json(data);
  })
  .post((req: Request, res: Response) => {
    const { name, breed, birthDate } = req.body
    if (name && breed && birthDate) {
      data.push({ id: data.length, name, breed, birthDate })
      res.send('Puppy added! :)');
    }
    res.status(500).send('Bad Request');
  })

app.get('/api/puppies/:id', (req: Request, res: Response) => {
  return res.status(200).json(data.filter(puppy => "" + puppy.id === req.params.id));
});

/* 

Your task is to create a RESTful API with the following endpoints:

- GET: `api/puppies`. This should return a list of all puppies in JSON-format.
- GET: `api/puppies/:id`. This should return one puppy in JSON-format.
- POST: `api/puppies`. This should create and return the newly added puppy.
- PUT: `api/puppies/:id`. This should put one puppy down (jk, just update the specific puppy).
- DELETE: `api/puppies/:id`. This should actually put one puppy down aka delete it.

*/


export default app;