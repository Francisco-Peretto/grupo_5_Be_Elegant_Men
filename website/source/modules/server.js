const port = process.env.PORT || 3030;
const start = () => console.log( `Servidor corriendo en localhost: ${port}`);

module.exports = {port,start};