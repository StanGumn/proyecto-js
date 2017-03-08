/**
 * Deporte.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    noticias: {
      collection: "Noticias",
      via: "idDeporte"
    },
    nombreDeporte: {
      type: 'string',
      required: true
    },
    galerias: {
      collection: "Galeria",
      via: "idDeporte"
    },
    videos: {
      collection: "Galeria",
      via: "idDeporte"
    }
  }
};

