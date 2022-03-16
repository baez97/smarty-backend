const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const Device = new Schema({
  _id: { type: ObjectId, required: true },
  deviceId: { type: String },
  name: { type: String },
  manufacturer: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  screenSize: {
    inches: { type: Number },
    width: { type: Number },
    height: { type: Number }
  },
  os: {
    type: { type: String }
  },
  ram: { type: Number },
  rom: { type: Number },
  processor: {
    cores: { type: Number },
    frequency: { type: Number },
    name: { type: String }
  },
  imageUrl: { type: String }
});

const DeviceModel = mongoose.model("device", Device);
module.exports = { DeviceModel };
