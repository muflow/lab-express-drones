const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
// require("../configs"); 

const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 18 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones)
    .then(dronesForDB => {
    console.log(`Created ${dronesForDB.length} drones`);
    mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`));