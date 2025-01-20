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


app.listen(3023);
console.log('Listening on port 3023');
