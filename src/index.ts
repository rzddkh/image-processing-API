import express from 'express';
import imageProcess from './routes/api/resize';
const app = express();
const port = 3000;


// sample url : http://localhost:3000/images?filename=pug&width=1000&height=250
app.get('/', (req, res) => {
  res.send(`server is connected at port ${port}`);
});


app.get('/images/', async (req,res)=>{
    await imageProcess(req.url);
    const filename = req.query.filename;
    res.sendFile(`images/thumb/${filename}-thumb.jpg`, { root: '.' });
});

app.listen(port, () => {
  console.log('server is live!');
});

