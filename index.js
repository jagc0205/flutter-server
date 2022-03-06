const express = require('express')
const path = require('path')
require('dotenv').config();

// Apps de Expres 
const app = express();

// Servidor de Sockect de Node
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./socket/socket')



// Path Publica 
const publicPtah = path.resolve( __dirname, 'public' )
app.use( express.static( publicPtah ) )

server.listen( process.env.PORT, (err) => {
    if ( err ) throw new Error(err)
    console.log( 'Servidor corriendo en puerto' , process.env.PORT );
})