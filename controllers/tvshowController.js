'use strict';
const TVShow = require('../models/TVShow');

module.exports.getArray = (request, reply) => {
    TVShow.find((err, tvshow)=>{                    
        reply(tvshow);
    })
}

module.exports.postArray = (request, reply)=>{
    let newTVShow = new TVShow({
        titulo: request.payload.titulo,
        anio: request.payload.anio,
        pais: request.payload.pais
    });

    newTVShow.save()
    .then(result => reply(result))
    .catch(err => reply({error: err}));
};

module.exports.getById = (request, reply)=>{
    TVShow.findById(request.params.id)
    .then(result => reply(result))
    .catch(err => reply({error: err}));
}