const express = require('express');
const app = express();
const config = require('./modules/server');
const {resolve} = require('path');
const methodOverride = require('method-override');
const session = require('express-session')
const cookies = require('cookie-parser')
const cors = require('cors')

const routesProducts = require('./routes/products');
const routesUsers = require('./routes/users');

app.listen(config.port,config.start());

app.set('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs")
app.use(express.static(resolve(__dirname,'..','public')))
app.use(express.urlencoded({extended: true})) 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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

app.use(cors());

const apiProductsRouter = require('./routes/api/productsRouter');
app.use ('/api/products', apiProductsRouter);

const apiUsersRouter = require('./routes/api/usersRouter')
app.use ('/api', apiUsersRouter);
