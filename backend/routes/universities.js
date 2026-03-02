import express from 'express';
import University from '../models/University.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.json(university);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;




