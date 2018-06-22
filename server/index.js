require('dotenv').config();
const express = require ('express');
const { json } = require ('body-parser');
const cors = require ('cors');
const session = require ('express-session');
const massive = require ('massive');

const housesCtrl = require ('./controllers/houses_ctrl.js')


const app = express();

app.use(json());
app.use(cors())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
  maxAge: 7 * 24 * 60 *1000
  }
}))


app.get('/api/test', (req, res, next) => {
  res.sendStatus(200);
})

app.get('/api/houses', housesCtrl.getHouses);
app.post('/api/houses', housesCtrl.createHouse);



const PORT = process.env.Port || 4000;
app.listen(PORT, () =>{
  console.log(`Server is listening on port ${PORT}`)
})

// CREATE TABLE houses(
//   id serial primary key,
//   name varchar(40) not null,
//   adress varchar(80) not null,
//   city integer,
//   state varchar (40),
//   zip integer
//   );