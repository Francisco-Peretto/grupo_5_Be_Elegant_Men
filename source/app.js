const express = require('express');
const app = express();
const config = require('./modules/server');
const {resolve} = require('path');
const methodOverride = require('method-override');

const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');

app.listen(config.port,config.start());

app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs")
app.use(express.static(resolve(__dirname,'..','public')))
app.use(express.urlencoded({extended: true})) // capturar datos de formulario post

app.use (methodOverride('_method'));
app.use('/', routesProducts);
app.use('/users/', routesUsers);
