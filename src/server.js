
require('dotenv').config()
const express = require('express')
const path = require('path'); // commonjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const connection = require('./config/database')

console.log(process.env)

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);
// khai bao route
app.use('/', webRoutes)

// test connection

connection.query(
  'SELECT * FROM Users ',
  function(err, results, fields) {
    console.log(">>> results = ", results); // results contains rows returned by server
  }
);



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})