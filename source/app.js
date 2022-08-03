const express = require('express')
const path = require('path')

const app = express();

app.set ("view engine", "ejs")          ////// setup de EJS

const publicPath = path.resolve(__dirname,'../public');

const port = process.env.PORT || 3030;

app.listen(port, () => console.log("Servidor en linea"))

app.get('/', (req , res) => res.render(path.resolve(__dirname,'./views/index.ejs')))
app.get('/login', (req , res) => res.render(path.resolve(__dirname,'./views/login.ejs')))
app.get('/register', (req , res) => res.render(path.resolve(__dirname,'./views/register.ejs')))
app.get('/productDetail', (req , res) => res.render(path.resolve(__dirname,'./views/productDetail.ejs')))
app.get('/cart', (req , res) => res.render(path.resolve(__dirname,'./views/cart.ejs')))

app.use(express.static(publicPath));
