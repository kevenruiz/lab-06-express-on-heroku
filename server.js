//import the main express object
import express from 'express'
//import cors so we can make calls from any browser
import cors from 'cors'
//make an express "app"
const app = express();

// register plugins
app.use(cors());

//heartbeat response -something that says hi on root get 
app.get('/', (req, res) => {
  res.send('Welcome to ther world of hello!');

});

// start the http server
app.listen(8001, () => {
  console.log('App start on port 8001')
})