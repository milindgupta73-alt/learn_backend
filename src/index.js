import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js'; // import DB_NAME

dotenv.config();

function connectDB() {
  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
}

connectDB();