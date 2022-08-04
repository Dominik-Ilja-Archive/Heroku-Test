const Plant = require('../models/plant');

const createPlant = async (request, response) => {
  try {
    const plant = await new Plant(request.body);
    await plant.save();
    return response.status(201).json({ plant });

  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
const deletePlant = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Plant.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).send("Plant deleted");
    } else {
      throw new Error("Plant not found");
    }

  } catch (error) {
    return response.status(500).send(error.message);
  }
};
const getAllPlants = async (request, response) => {
  try {
    const plants = await Plant.find();
    return response.status(200).json({ plants });

  } catch (error) {
    return response.status(500).send(error.message);
  }
};
const getPlantById = async (request, response) => {
  try {
    const { id } = request.params;
    const plant = await Plant.findById(id);

    if (plant) {
      return response.status(200).json(plant);
    }

    return response.status(404).send('Plant not found');

  } catch (error) {
    return response.status(500).send(error.message);
  }
};
const updatePlant = (request, response) => {
  try {
    const { id } = request.params;
    Plant.findByIdAndUpdate(id, request.body, { new: true }, (err, plant) => {
      if (err !== null) {
        console.log('error', err);
        response.status(404).send(message);
      }
      else {
        response.json(plant);
      }
    });

  } catch (error) {
    return response.status(500).send(error.message);
  }
};

module.exports = { createPlant, deletePlant, getAllPlants, getPlantById, updatePlant };
