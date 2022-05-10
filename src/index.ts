import express from 'express';
import pug from './routes/api/resize';
import { imageProcess } from './routes/api/resize';
import url from 'url';
//const url=require('url')
const app = express();
const port = 3000;


// sample url : http://localhost:3000/images?filename=pug&width=1000&height=250
app.get('/', (req, res) => {
  res.send(`server is connected at port ${port}`);
});

app.get('/images/',pug, (req,res)=>{
    const filename = (req.url).split('?')[1].split('&')[0].split('=')[1];
    res.sendFile(`images/thumb/${filename}.jpg`, { root: '.' });
});

app.listen(port, () => {
  console.log('server is live!');
});

