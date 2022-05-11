import express from 'express';
import resize from './routes/api/resize';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`server is connected at port ${port}`);
});

// end point for resizing an image
app.use('/', resize);

app.listen(port, () => {
  console.log('server is live!');
});
