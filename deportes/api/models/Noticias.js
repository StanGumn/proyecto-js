/**
 * Noticias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreNoticia: {
      type: 'string',
      required: true
    },
    infoNoticia: {
      type: 'string',
      required: true
    },
    fechaCreacion: {
      type: 'date',
      required: true
    },
    idDeporte:{
      model:"Deporte"
    },
    galerias:{
      collection: "Galeria",
      via:"idNoticias"
    }
  }
};

