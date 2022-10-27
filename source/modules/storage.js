const fs = require('fs');
const {extname,resolve} = require('path')
const {diskStorage} = require('multer');

let destination = folder => (req, file, callback) =>{
    let path = "";
    let category = req.body.category;
    req.body.category ? path = resolve(__dirname,'..','..','public','img','products', category) : path = resolve(__dirname,'..','..','public','img','users');
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