import mongoose, { Schema, Document, models } from "mongoose";

export interface IQuizAttempt extends Document {
  userId: string;
  examId: string;
  score: number;
  total: number;
  createdAt: Date;
}

const QuizAttemptSchema = new Schema<IQuizAttempt>({
  userId: { type: String, required: true },
  examId: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default models.QuizAttempt || mongoose.model<IQuizAttempt>("QuizAttempt", QuizAttemptSchema);
