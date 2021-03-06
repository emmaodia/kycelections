const mongoose = require('mongoose');

const infoSetSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  office: { type: String },
  //website: : { type: String },
  // wikiLink: : { type: String },
  // state: : { type: String },
  // lga: : { type: String },
  party: { type: String },
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('infoSet', infoSetSchema);
