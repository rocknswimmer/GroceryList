const express = require('express');
const app = express();

const compression = require('compression')
const path = require('path');

require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD // this was a hard typo to find in the terminal
});


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));

//POST

app.post('/user', (req,res) => {
  const {user} = req.body;
  pool.query('insert into grocery_users (user_num) values ($1) on conflict do nothing returning *', [user], (err, data) => {
    if (err) {
      console.log('error posting user', err);
    }
    res.send('logged in')
  })
})

app.post('/addGI', (req,res) => {
  const {name, quantity, units, user} = req.body;
  pool.query('insert into grocery_list (user_num, item, quantity,units) values ($1,$2,$3,$4) returning *', [user, name, Number(quantity), units], (err, data) => {
    if (err) {
      console.log('error adding Grocery Item', err);
    }
    res.send('Item added')
  })
})

//GET

app.get('/GL/:id', (req,res) => {
  const user = req.params.id;
  pool.query('select * from grocery_list where user_num = $1',[user],(err, data) => {
    if (err) {
      console.log('error getting GL')
    }
    res.send(data)
  })
})



//PUT


//DELTE





app.listen(3023);
console.log('Listening on port 3023');
