require('dotenv').config();
const mongoose = require('mongoose');

const Artist = require('../models/models/Artist');
const Album = require('../models/models/Album');
const Song = require('../models/models/Song');
const User = require('../models/models/User');
const Playlist = require('../models/models/Playlist');

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected!');

    // Clear existing data
    await Promise.all([
      Artist.deleteMany({}),
      Album.deleteMany({}),
      Song.deleteMany({}),
      User.deleteMany({}),
      Playlist.deleteMany({})
    ]);

    // Artist
    const artist = await Artist.create({
      name: 'Daft Punk',
      genre: 'Electronic',
      bio: 'French electronic music duo.'
    });

    // Album
    const album = await Album.create({
      title: 'Discovery',
      releaseYear: 2001,
      artist: artist._id
    });

    // Song
    const song = await Song.create({
      title: 'One More Time',
      duration: 320,
      album: album._id,
      artist: artist._id
    });

    // User
    const user = await User.create({
      username: 'music_fan_01',
      email: 'fan@example.com',
      password: 'hashed_password_123'
    });

    // Playlist
    await Playlist.create({
      name: 'Gym Jams',
      owner: user._id,
      songs: [song._id],
      description: 'High energy tracks'
    });

    console.log('✅ Seeding Complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding Failed:', err);
    process.exit(1);
  }
}

seed();
