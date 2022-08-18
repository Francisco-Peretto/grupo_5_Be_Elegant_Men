const {resolve} = require("path")
const fs = require("fs")

let model = {
    all : function () {                                         // funcion que devuele todos los productos que se encentren en el archivo
                                           
        let file = resolve(__dirname,'../data','products.json')     // guardamos la ruta al archivo json en una varibale llamada file
        let data = fs.readFileSync(file)                            // leemos el archivo json y lo guardamos en una variable llamada data
        return JSON.parse(data);                                    // devolvemos el archivo json convertido en un ojeto
    },
    one : function (sku) {                      // funcion que devuele un producto pasandole como parametro un identificador unico
                   
        let all = model.all();                      // creamos un objeto llamado all con la funcion all del modelo (tmb podria ser this.all()) que contendra todos los elementos
        return all.find(e => e.sku == sku)          // devolvemos elemento del array cuyo identificador sea igual al identificador que le pasamos
    },
    generate : function (data) {            // funcion que nos permite generar un nuevo prodcto

        let product = {}                        // creamos un nuevo product a traves de la variable data (que es el producto que cargue en el formulario de creacion)
                                                //para sacar el sku hacemos lo siguiente
        let all = model.all()                   // traigo todos los productos
        let last = all.pop()                    // saco el ultimo producto
        product.sku = last.sku + 1              // al sku del ultimo producto lo incremento en una unidad y le asigno ese numero como sku al producto que estoy generando
        
        product.nombre = data.nombre            // le asignamos el nombre a traves del valor que sacamos de data
        product.categoria = data.categoria      // le asignamos el nombre a traves del valor que sacamos de data
        product.marca = data.marca              // le asignamos el nombre a traves del valor que sacamos de data
        product.precio = parseInt(data.precio)    // le asignamos el nombre a traves del valor que sacamos de data
        product.imagen = data.imagen              // agrego la imagen
        return product                          // devolvemos el nuevo producto
    },
    write : function (data) {               // funcion que nos permite escribir el archivo json

        let file = resolve(__dirname,'../data','products.json') // armamos la ruta al archivo
        let json = JSON.stringify(data,null,2);                 // convertimos el parametro data a json (los ultimo 2 parametros son para hacer legible el json - null lo ponemos para poner un cb que cambie la funcion y 2 son las tabulaciones q queremos agregarle
        return fs.writeFileSync(file,json)                      // escribimos la variable json en el archivo "file"  
    }
} 

module.exports = model