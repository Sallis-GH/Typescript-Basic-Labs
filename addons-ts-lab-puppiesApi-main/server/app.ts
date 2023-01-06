import express from 'express';
import data from './db'
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

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

app.route('/api/puppies/:id')
  .get((req: Request, res: Response) => {
    return res.status(200).json(data.filter(puppy => "" + puppy.id === req.params.id));
  })
  .put((req: Request, res: Response) => {
    const id = Number(req.params.id)
    const index = data.findIndex(puppy => puppy.id === id)
    const { name, breed, birthDate } = req.body

    if (name && breed && birthDate && index !== -1) {
      data[index] = { id: id, name, breed, birthDate };
      res.status(200).send("Puppy updated :)")
    }
    res.status(404).send();
  })
  .delete((req: Request, res: Response) => {
    const id = Number(req.params.id)
    const index = data.findIndex(puppy => puppy.id === id)
    if (index === -1) {
      res.status(404).send()
    }
    data.splice(index, 1)
    res.status(204).send()
  })

export default app;