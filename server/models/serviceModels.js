import mongoose from 'mongoose';

// 建立 Schema
const serviceSchema = new mongoose.Schema({
  id: {
    type: 'number',
    required: true,
    unique: true
  },
  name: {
    type: 'string',
    required: true
  },
}, {
  versionKey: false
});

// 建立 Model
const Service = mongoose.model('Service', serviceSchema);

export default Service;