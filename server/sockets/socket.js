    const { io } = require('../server')
     
     io.on('connection' , ( usuario ) => { //io es por parte del servidor es decir la informacion que le viene desde el agevador del usuario recae en el io
        
        console.log('Nuevo usuario conectado');
        
        usuario.on('disconnect' , () => {  // Este usuario.on proviene de el paramtero que recibimos en la funcion de arriba aqui -> ( io.on('connection' , ( usuario ) )
        console.log('Usuario desconectado');
    })
    
    //Informacion que me llega del usuario
    usuario.on('enviarMensaje' , ( msg , callback ) => {
        
        usuario.broadcast.emit( 'enviarMensaje' ,  msg ) //  usuario.broadcast.emit es similar a io.sockets.emit con la diferencia de que este emite la infromacion a todos menos a ti - io.sockets.emit es para emitir a todos los usuarios que se encuentren en la pagina incluido tu
        if( msg.name ){
            callback( 'Todo salio bien' )
        }else{
            callback( 'Todo salio mal!!!!' )
        }
        
    });
    
});




/* UNA MENERA DIFERENTE DE PODER EXPORTAR ESTE PARTA DEL CODIGO PARA PODER SER USADO EN EL SERVIDOR - NO OLVIDES QUE EN EL SERVIDOR TIENES QUE EXPORTARLO Y MANDAR COMO PARAMTERO EL IO  ASI --> require('./sockets/socket')( io ) */
// module.exports = function( io ){

    //codigo
    
// }