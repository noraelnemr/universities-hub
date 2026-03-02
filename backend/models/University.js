import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  _id: Number,         // Your IDs are strings like "1", "2"
  name: String,
  image: String,
  about: String,
  address: String,
  explore360: String,
  website: String,
  rank: {
    world: Number,
    totalWorld: Number,
    africa: Number,
    totalAfrica: Number,
    egypt: Number,
    totalEgypt: Number,
  },
  applylink: String,
}); // Make sure it uses your collection explicitly

export default mongoose.model('University', universitySchema);



