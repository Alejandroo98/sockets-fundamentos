//En este espacio(script) vamos a definir las funciones que queremos que se disparen cuando recibamos informacion del servidor o le enviemos informacion - Por ejemplo cuando el servidor se cae podemos havisarle al usuario de que el servidor esta fuera de servicio
var socket = io();  //io() es una funcion que aparece gracias a la libreria que acabamos de importar esta -> ( <script src="socket.io/socket.io.js"><//script> ) que se encuentra en el archivo public/index.html

//No olvides que los ON son para escuchar
socket.on('connect'  , function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect' , function(){
    console.log('Perdimos conexion con el servidor');
})

//Lo olvides que los EMIT  son para enviar informacion
let msg = document.getElementById('text');
let parfo = document.getElementById('parrafo');
let btn = document.getElementById('boton').addEventListener('click' , ()=>{
    socket.emit('enviarMensaje' , {  //enviarMensaje es como una palabra clave que nosotros ponemos para que el servidor sepa que funcion correr cuando pase por aqui y lo que viene despues de la coma es la informacion que el usuario enviara al servidor
        name : msg.value,
        age : 20
    } , function(msg){
        console.log(msg);
    }) 
    msg.value = ''
});



//En este caso estamos escuchando informacion que viene desde el servidor. Para eso desde el servidor mandamos informacion con emit 
socket.on( 'enviarMensaje' , function(msg){

    parfo.innerHTML += `<p>${ msg.name }</p>`
    
});
