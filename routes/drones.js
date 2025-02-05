const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
    .then((response) => {
      console.log(response);
      res.render("drones/list.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });// Iteration #2: List the drones
  // ... your code here
});
router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.log(error);
      res.render("drones/create-form.hbs");
    });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
