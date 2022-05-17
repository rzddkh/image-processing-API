import express from 'express';
import resize from './routes/api/resize';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(`server is connected at port ${port}`);
});

// end point for resizing an image
app.use('/', resize);

app.get('*', (req: express.Request, res: express.Response): void => {
  res.send(
    'wrong route please see the documentation at https://github.com/rzddkh/image-processing-API#readme'
  );
});
app.listen(port, (): void => {
  console.log('server is live!');
});

export default app;
