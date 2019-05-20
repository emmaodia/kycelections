const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const InfoSet = require('../api/models/infoSet');

router.get('/', (req, res, next) => {
  InfoSet.find()
  .select('_id name office party')
  .exec()
  .then(results => {
      responses = {
        infoSet: results.map(result => {
          return {
            _id: result.id,
            name: result.name,
            office: result.office,
            party: result.party
          }
        })
      }
      res.status(200).json(responses)
  })
  .catch(error => {
    res.status(500).json({
      error: error
    })
  })
});

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

router.get('/:infoSet', (req, res, next) => {
  InfoSet.findById(req.params.infoSet)
  .exec()
  .then(infoSet => {
    if(!infoSet) {
      return res,status(404).json({
        message: 'InfoSet NOT found!'
      })
    }
    res.status(200).json({
      infoSet: infoSet
    })
  })
  .catch(error => {
    res.status(500).json({
      error: error
    })
  })
})

module.exports = router;
