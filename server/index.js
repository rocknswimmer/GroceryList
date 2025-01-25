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

app.post('/addII', (req,res) => {
  const {name, quantity, units, user, location, expires} = req.body;
  pool.query('insert into grocery_inventory (user_num, item, quantity,units, item_location, expires) values ($1,$2,$3,$4,$5,$6) returning *', [user, name, Number(quantity), units, location, expires], (err, data) => {
    if (err) {
      console.log('error adding Inventory Item', err);
    }
    res.send('Item added to inventory')
  })
})

//GET

app.get('/GL/:id', (req,res) => {
  const user = req.params.id;
  pool.query('select * from grocery_list where user_num = $1',[user],(err, data) => {
    if (err) {
      console.log('error getting Grocery List')
    }
    res.send(data)
  })
})

app.get('/IL/:id', (req,res) => {
  const user = req.params.id;
  pool.query('select * from grocery_inventory where user_num = $1',[user],(err, data) => {
    if (err) {
      console.log('error getting Inventory List')
    }
    res.send(data)
  })
})



//PUT

app.put('/UpdateGI', (req,res) =>{
  const {name,quantity,units,user,itemNum} = req.body;
  pool.query('update grocery_list set item = $1, quantity = $2, units = $3 where user_num = $4 and id = $5 returning *',[name,Number(quantity), units, Number(user), Number(itemNum)], (err, data) => {
    if(err){
      console.log('error updating Grocery Item')
    }
    res.send(data)
  })
})

app.put('/UpdateII', (req,res) =>{
  const {name,quantity,units,user,itemNum,location,expires} = req.body;
  pool.query('update grocery_inventory set item = $1, quantity = $2, units = $3, item_location = $6, expires = $7  where user_num = $4 and id = $5 returning *',[name,Number(quantity), units, Number(user), Number(itemNum), location, expires], (err, data) => {
    if(err){
      console.log('error updating Inventory Item')
    }
    res.send(data)
  })
})


//DELTE

app.delete('/deleteGI/:id', (req, res) => {
  const item = req.params.id;
  pool.query('delete from grocery_list where id = $1', [item], (err, data) => {
    if(err){
      console.log('error deleting GI')
      res.send(err);
    }
    else{
       res.send('deleted Grocery Item')
    }

  })
})






app.listen(3023);
console.log('Listening on port 3023');
