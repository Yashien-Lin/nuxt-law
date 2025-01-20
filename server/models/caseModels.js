import mongoose from 'mongoose';

// 建立 Schema
const caseSchema = new mongoose.Schema({
  id: {
    type: 'number',
    required: true,
    unique: true
  },
  image: {
    type: 'string',
    required: true
  },
  title: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true,
  }
}, {
  versionKey: false
});

// 建立 Model
const Case = mongoose.model('Case', caseSchema);

export default Case;