const express = require('express');
const app = express();
const config = require('./modules/server');
const {join} = require('path');

const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');
const statics = require('./modules/static');

app.listen(config.port,config.start());

app.set ("view engine", "ejs")

app.use(statics(join(__dirname,"../public")));
app.use('/', routesProducts);
app.use('/users/', routesUsers);