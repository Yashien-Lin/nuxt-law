import mongoose from 'mongoose';

// 建立 Schema
const teamSchema = new mongoose.Schema({
  // _id: { 
  //   type: 'number',
  //   required: false,
  //   unique: true
  // },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  experiences: {
    type: [String],
    required: true,
  },
  fields: {
    type: [String],
    required: true,
  }
}, {
  versionKey: false
});

// 建立 Model
const Team = mongoose.model('Team', teamSchema, 'team');

export default Team;