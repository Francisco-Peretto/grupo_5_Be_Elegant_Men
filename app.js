const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname,'./public');

const port = 3030;

app.listen(port, () => console.log("Servidor en linea"))

app.get('/', (req , res) => res.sendFile(path.resolve(__dirname,'./views/index.html')))

app.use(express.static(publicPath))
