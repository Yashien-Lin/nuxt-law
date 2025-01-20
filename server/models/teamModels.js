import mongoose from 'mongoose';

// 建立 Schema
const teamSchema = new mongoose.Schema({
  _id: {
    type: 'number',
    required: false,
    unique: true
  },
  image: {
    type: 'string',
    required: true
  },
  name: {
    type: 'string',
    required: true
  },
  experience: {
    type: 'Array',
    required: true,
  },
  fields: {
    type: 'Array',
    required: true,
  }
}, {
  versionKey: false
});

// 建立 Model
const Team = mongoose.model('Team', teamSchema, 'team');

export default Team;