const express = require('express');
const app = express();
const config = require('./modules/server');
const {resolve} = require('path');
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser')


const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');

app.listen(config.port,config.start());

app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs")
app.use(express.static(resolve(__dirname,'..','public')))
app.use(express.urlencoded({extended: true})) 

const globalUserLogMiddleware = require('./middlewares/globalUserLogMiddleware')

app.use(session({
    secret:'express-users',
    resave: false,
    saveUninitialized: true
}))

app.use(cookies())

app.use(globalUserLogMiddleware)

app.use (methodOverride('_method'));
app.use('/', routesProducts);
app.use('/users/', routesUsers);