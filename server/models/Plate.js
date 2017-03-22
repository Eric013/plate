const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlateSchema = new Schema({
  id: String,
  name: String,
  description: String,
  colorID: String,
  completed: Boolean
});

module.exports = mongoose.model("plate", PlateSchema, "plates");
