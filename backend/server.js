import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import universityRoutes from './routes/universities.js';
import programRoutes from './routes/programs.js';
import questionsRoutes from './routes/questions.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.set('debug', true);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));



app.use('/api/universities', universityRoutes);
app.use('/api/programs', programRoutes);
app.use('/api', questionsRoutes);










