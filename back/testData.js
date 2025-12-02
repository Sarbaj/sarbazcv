import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Achievement, SkillCategory } from './model/AllModel.js';

dotenv.config();

const testData = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xyevmbo.mongodb.net/${process.env.DB_NAME}`;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const achievements = await Achievement.find();
    console.log(`\nFound ${achievements.length} achievements:`);
    achievements.forEach((a, i) => {
      console.log(`${i + 1}. ${a.icon} ${a.title}`);
    });

    const skills = await SkillCategory.find();
    console.log(`\nFound ${skills.length} skill categories:`);
    skills.forEach((s, i) => {
      console.log(`${i + 1}. ${s.icon} ${s.title} (${s.skills.length} skills)`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

testData();
