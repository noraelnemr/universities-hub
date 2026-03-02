import express from "express";
import Question from '../models/Question.js';


const router = express.Router();
// @route   GET /api/questions
// @desc    Get all quiz questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().sort({ _id: 1 });
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// @route   POST /api/recommend
// @desc    Get recommended majors based on answers
router.post('/recommend', async (req, res) => {
  const answers = req.body.answers;

  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: 'Invalid input. Expected answers array.' });
  }

  try {
    const allQuestions = await Question.find();
    const majorScores = {};

    answers.forEach(({ questionId, answerId }) => {
      const question = allQuestions.find(q => q._id.toString() === questionId);
      if (!question) return;

      const option = question.options.find(opt => opt._id.toString() === answerId);
      if (!option) return;

      option.relatedMajors.forEach(major => {
  majorScores[major] = (majorScores[major] || 0) + 1;
});

    });

    const sortedMajors = Object.entries(majorScores)
      .filter(([_, score]) => score > 0)
      .sort((a, b) => b[1] - a[1]);

    const recommendedMajors = sortedMajors.slice(0, 5).map(([major, score]) => ({
      major,
      score
    }));

    res.json({ recommendedMajors });
  } catch (error) {
    console.error('Error in /recommend:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
