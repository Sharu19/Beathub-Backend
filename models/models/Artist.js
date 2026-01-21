const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    enum: ['Pop', 'Rock', 'HipHop', 'Jazz', 'Electronic']
  },
  followers: {
    type: Number,
    default: 0
  },
  albums: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Album',
    default: []
  },
  songs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Song',
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);
