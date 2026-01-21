const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favoriteSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Song',
    default: []
  },
  favoriteArtists: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Artist',
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
