const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/curso_bdg', {useMongoClient: true});
Mongoose.Promise = global.Promise;
let db = Mongoose.connection;

db.on('error', ()=>{
    console.log('error de conexión')
});
db.once('open', ()=>{
    console.log('Conectado a mongo');
});

module.exports = db;