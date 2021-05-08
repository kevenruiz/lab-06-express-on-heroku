// import dependencies
import express from 'express';
import cors from 'cors';
import data from '../data/cats.js';


// make an express app
const app = express();
// allow our server to be called from any website
app.use(cors());

// API routes for cats
app.get('/api/cats', (req, res) => {
  res.json(data);
});

app.get('/api/cats/:id', (req, res) => {
  res.json(data[0]);
});





// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('Hello World !');
});

export default app;