import express from 'express';
 import  Connection  from './database/db.js';
import dotenv from 'dotenv'
  import  Routes  from './routes/route.js';
  import bodyParser from 'body-parser';

 import cors from 'cors'

const app = express();

 dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

   app.use('/', Routes);

const PORT = 8080;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

 Connection(username, password);

app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
})