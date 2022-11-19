const express = require('express');
const app = express();
const config = require('./modules/server');
const {resolve} = require('path');

// External modules
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require('cors');

// Server port config & start
app.listen(config.port,config.start());

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(resolve(__dirname,'..','public/')));
app.use(express.urlencoded({extended: true}));
app.use(cookies());
app.use (methodOverride('_method'));
app.use(cors());

app.use(session({
    secret:'express-users',
    resave: false,
    saveUninitialized: true
}))

// Middleware
const globalUserLogMiddleware = require('./middlewares/globalUserLogMiddleware');
app.use(globalUserLogMiddleware)

// Product routes
const routesProducts = require('./routes/products');
const apiProductsRouter = require('./routes/api/productsRouter');
app.use('/', routesProducts);
app.use ('/api/products', apiProductsRouter);

// User routes
const routesUsers = require('./routes/users');
const apiUsersRouter = require('./routes/api/usersRouter');
app.use('/users/', routesUsers);
app.use ('/api', apiUsersRouter);