const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const InfoSet = require('../api/models/infoSet');

// router.get('/', (req, res, next) => {
//   InfoSet.find()
//   .select('_id name office party')
//   .exec()
//   .then(results => {
//
//   })
// });

router.post('/', (req, res, next) => {
  const infoSet = new InfoSet({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    office: req.body.office,
    party: req.body.party
  });

  infoSet.save()
  .then(() => {
    res.status(201).json({
      message: "New Info created!",
      infoSet: {
        _id: infoSet.id,
        name: infoSet.name,
        office: infoSet.office,
        party: infoSet.party
      }
    })
  })
  .catch(error => {
    console.log(`Info could not be created! due to: ${error}`);
    res.status(500).json({
      error: error
    })
  })
})

module.exports = router;
