const express = require('express');
const { createPlant, getAllPlants, getPlantById, updatePlant, deletePlant } = require('../controllers');
const router = express.Router();


router.get('/', (request, response) => response.send('This is the root'));

// routes for /plants
router.get('/plants', getAllPlants);
router.post('/plants', createPlant);
router.get('/plants/:id', getPlantById);
router.put('/plants/:id', updatePlant);
router.delete('/plants/:id', deletePlant);

module.exports = router;
