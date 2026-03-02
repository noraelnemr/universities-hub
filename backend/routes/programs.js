// routes/programs.js
import express from "express";
import Program from "../models/Program.js";
import University from "../models/University.js";


const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET programs by universityId
router.get("/university/:id", async (req, res) => {
  try {
    const universityId = parseInt(req.params.id);
    const programs = await Program.find({ universityId });
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findOne({ _id: parseInt(req.params.id) });
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    res.json(program);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/search', async (req, res) => {
  const { q } = req.query;

  if (!q) return res.status(400).json({ error: 'Missing query parameter' });

  try {
    const programs = await Program.find({
      name: { $regex: q, $options: 'i' }
    });

    const results = await Promise.all(programs.map(async (program) => {
      const university = await University.findOne({ _id: program.universityId });
      return {
        program,
        universityName: university ? university.name : "Unknown University"
      };
    }));

    res.json(results);
  } catch (error) {
    console.error("Search route error:", error);
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;
