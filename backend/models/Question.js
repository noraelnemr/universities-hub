import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  _id: String,
  text: String,
  relatedMajors: [String]
});

const questionSchema = new mongoose.Schema({
  _id: String, // or Number if you're using numbers
  question: String,
  options: [optionSchema]
});

export default mongoose.model('Question', questionSchema);
