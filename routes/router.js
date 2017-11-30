'use strict';
const tvController = require('../controllers/tvshowController');
const tokenController = require('../controllers/tokenController');

module.exports = [{
        method: 'GET' ,
        path: '/tvshows',
        config: {            
            handler: tvController.getArray 
        }    
    },{
        method: 'POST',
        path: '/tvshow',
        config: {
            handler: tvController.postArray
        }
    },{
        method: 'GET',
        path: '/tvshow/{id}',
        config: {
            handler: tvController.getById
        }
    },{
        method: 'POST',
        path: '/createToken',
        config: {
            handler: tokenController.crearToken
        }
    },{
        method: 'GET',
        path: '/validateToken',
        config: {
            handler: tokenController.validarToken
        }
    }]