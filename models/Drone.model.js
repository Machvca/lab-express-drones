
const mongoose = require("mongoose");
const droneSchema = new mongoose.Schema({
  name: {
    type: String,
 // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  propellers: {
    type: Number,
  },

  maxSpeed: {
    type: Number, // en caso que la caracteristica no se pase, será el valor indicado.
  },
});// Iteration #1
const drone =mongoose.model("drone", droneSchema)
module.exports = drone;