import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  _id: Number, // Program ID
  universityId: {
    type: Number,
    required: true,
    ref: "University"
  },
  name: { type: String, required: true },
  schoolName: String,
  aboutDegree: String,
  photo: String,
  duration: String,
  fees:String,
  modules: [
    {
      year: Number,
      title: String,
      courses: [
        {
          name: { type: String, required: true },
          creditHours: { type: Number, required: true },
          type: { type: String, enum: ["Core", "Elective"], required: true },
          semester: { type: Number, required: true },
        }
      ]
    }
  ],
  requirements: [
    {
      title: String,
      notes: String, // or Array of strings if you want multiple lines
    }
  ],
  jobs: {type: String}
});

export default mongoose.model("Program", programSchema);
