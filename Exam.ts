import mongoose, { Schema, Document, models } from "mongoose";

export interface IExam extends Document {
  title: string;
  subject: string;
  year: number;
  university?: string;
  department?: string;
  course?: string;
  category?: string; // e.g., "past-exam", "quiz", "midterm", etc.
  semester?: string; // e.g., "Year 1 - Sem 1"
  fileUrl?: string;
  questions: Array<{
    question: string;
    options: string[];
    answerIndex: number;
  }>;
  createdBy: string;
  createdAt: Date;
}

const ExamSchema = new Schema<IExam>({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  year: { type: Number, required: true },
  university: { type: String },
  department: { type: String },
  course: { type: String },
  category: { type: String },
  semester: { type: String },
  fileUrl: { type: String },
  questions: [{
    question: String,
    options: [String],
    answerIndex: Number
  }],
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default models.Exam || mongoose.model<IExam>("Exam", ExamSchema);
