/**
 * Videos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idDeporte:{
      model:"Deporte"
    },
    idNoticias:{
      model:"Noticias"
    },
    urlVideo: {
      type: 'string',
      required: true
    }

  }
};

