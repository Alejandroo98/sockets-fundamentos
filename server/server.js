//NO OLVIDES QUE ESTE ES EL SERVIDOR ( EL LADO DEL SREVIDOR )
//http://localhost:3000/socket.io/socket.io.js   -> Si esto correo quiere decir que todo hiciste bien

const express = require('express');
const app = express();
const socketIo = require('socket.io');

const http = require('http'); //Este es un modulo que trae node por defecto

const path = require('path');


//Definir el servidor para correc la aplicacion
let server = http.createServer(app);

//Inicializar el socket.  IO = Esta es la comunicacion del backend
//EXPORTAR EL IO PARA PODER USARLO EN EL ARCHIVO SOCKET
module.exports.io = socketIo(server); 
require('./sockets/socket'); //Esto lo que hace es decirle a este archivo (server) que utilize otro archivo js
//FIN - EXPORTAR EL IO PARA PODER USARLO EN EL ARCHIVO SOCKET



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



server.listen(port, (err) => { //Aqui se rempasa el app.listen por server.listen

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});