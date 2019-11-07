const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  cost: {
    type: String
  },
  importanceScale: {
    type: Number
  },
  difficultyScale: {
    type: Number
  },
  completed: {
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

// model name has to be singular
module.exports = mongoose.model('Item', itemSchema)
