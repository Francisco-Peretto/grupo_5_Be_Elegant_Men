const {resolve} = require("path")
const fs = require("fs")

let model = {
    all : function () {              // funcion que devuele todos los productos que se encentren en el archivo
                                           
        let file = resolve(__dirname,'../data','products.json')     
        let data = fs.readFileSync(file)                           
        return JSON.parse(data);                                    
    },
    one : function (sku) {             // funcion que devuele un producto pasandole como parametro un identificador unico
                   
        let all = model.all();                      
        return all.find(e => e.sku == sku)          
    },
    generate : function (data) {            // funcion que nos permite generar un nuevo prodcto

        let product = {}                        
                                                
        let all = model.all()                   
        let last = all.pop()                    
        product.sku = last.sku + 1             

        product.nombre = data.nombre  
        product.detalle = data.detalle            
        product.categoria = data.categoria      
        product.marca = data.marca              
        product.precio = parseInt(data.precio)    
        product.imagen = data.imagen              
        return product                          
    },
    write : function (data) {            // funcion que nos permite escribir el archivo json

        let file = resolve(__dirname,'../data','products.json') 
        let json = JSON.stringify(data,null,2);                 
        return fs.writeFileSync(file,json)                      
    }
} 

module.exports = model