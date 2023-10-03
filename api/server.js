const express = require("express");

const Trips = require('../trips/trips-model');  //eslint-disable-line

const server = express();

server.use(express.json());

server.get("/trips", (req, res) => {
  Trips.getAll()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/trips/:id', (req,res) => {
  const { id } = req.params; // Extract the 'id' from req.params
  Trips.getById(id)
    .then((trip) => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        res.status(404).json({ message: 'Trip not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving trip', error });
    });
})



module.exports = server