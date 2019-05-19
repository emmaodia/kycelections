const mongoose = require('mongoose');

const infoSetSchema = mongoose.Schema({
  _id: mongoose.Schema.Type.ObjectId,
  name: { type: String },
  office: { type: String },
  //website: : { type: String },
  // wikiLink: : { type: String },
  // state: : { type: String },
  // lga: : { type: String },
  party: : { type: String },
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('infoSet', infoSetSchema);
