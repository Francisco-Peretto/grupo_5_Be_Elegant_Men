const express = require('express');
const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname,'../public');

const port = process.env.PORT || 3030;
app.set ("view engine", "ejs")          ////// setup de EJS
app.listen(port, () => console.log("Servidor en linea"))

app.use('/', routesProducts);

app.use('/users/', routesUsers);

app.use(express.static(publicPath));