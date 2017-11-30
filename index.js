'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const db = require('./database').db;
const plugins = [{
    register: require('inert')
}];


server.connection({
    port: 3000
});

//server.route(rutas);
server.register([require('./routes/index')]);

//plugins
server.register( plugins, (err) =>{
    if(err){
        return console.log(err);
    }

    server.start((err)=> {
        if(err){
            return console.log(err);
        }
        console.log(`Servidor iniciado en: ${server.info.uri}`);
    });
});

