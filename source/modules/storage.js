const fs = require('fs');
const {extname,resolve} = require('path')
const {diskStorage} = require('multer');

let destination = folder => (req, file, callback) =>{
    let path = "";
    let category = req.body.category == "Ambos" ? "1" : req.body.category == "Camisas" ? "2" : req.body.category == "Corbatas" ? "3" : req.body.category == "Pantalones" ? "4" : req.body.category == "Sacos" ? "5" : "6";
    req.body.email ? path = resolve(__dirname,'..','..','public','img','users') : path = resolve(__dirname,'..','..','public','img','products', category);
    if(!fs.existsSync(path)){
        fs.mkdirSync(path)
    }
    return callback(null, path) 
} 
let filename = (req, file, callback) => callback(null, file.fieldname + '-' + Date.now() + extname(file.originalname));

const storage = folder => diskStorage({
    destination: destination(folder),
    filename: filename
});

module.exports = storage;