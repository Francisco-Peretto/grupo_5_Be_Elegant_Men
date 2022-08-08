const port = process.env.PORT || 3030;
const start = () => console.log( `Servidor corriendo en ${port}`);

module.exports = {port,start};