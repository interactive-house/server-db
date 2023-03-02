const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  lamp: {
    type: String
  },
  door: {
    type: String
  },
  window: {
    type: String
  },
  house_password: { 
    type: String
  },
  soil_humidity: {
    type: String
  },
  flammable_gas: { 
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;