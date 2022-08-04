const mongoose = require('mongoose');

let MONGODB_URI = "mongodb+srv://Shaded23:tJHue6g3PM1cqGtG@cluster0.dgov0dq.mongodb.net/plantsDatabase?retryWrites=true&w=majority" || 'mongodb://127.0.0.1:27017/plantsDatabase';

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
