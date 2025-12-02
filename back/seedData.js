import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Achievement, SkillCategory } from './model/AllModel.js';

dotenv.config();

const achievements = [
  {
    icon: "🎓",
    title: "BCA First Year - The Spark",
    description: "My journey into development started long before I understood terms like 'full-stack' or 'scalability.' It began in Semester 2, when I created my very first website. I still remember the excitement of experimenting with layouts, colors, and simple animations. What surprised me the most was not the website itself, but the reaction it received—my design looked better than the final-year students' projects, and even my teachers appreciated the effort. That moment gave me the confidence I didn't know I needed."
  },
  {
    icon: "💼",
    title: "Second Year - First Freelance",
    description: "By the time I entered Second Year, my curiosity had turned into a skill, and my skill began turning into opportunities. I built my first freelancing project—an Online Tournament Management System, complete with player entry, match scheduling, result management, and smooth UI. It became the first project that made me feel like, 'Yes, this is what I want to do in life.'"
  },
  {
    icon: "🏆",
    title: "Final Year - Rank 1 Achievement",
    description: "In Final Year, everything came full circle. I developed a full software solution for my academic project and ended up getting Rank 1 in Software Development. That achievement validated the countless hours I spent debugging, designing, and learning."
  },
  {
    icon: "🚀",
    title: "MCA - Professional Growth",
    description: "After BCA, I started my MCA journey, and things only got better. I created a B2B website for a startup, handling everything from product listings and authentication to modern responsive UI. I also developed a service-based company website, helping them showcase their business with a clean and professional online presence."
  },
  {
    icon: "🤖",
    title: "AI Integration - New Horizons",
    description: "One of the most exciting moments came when Ganpat University's MCA faculty approached me to build an AI-powered website for their AI Viva Portal. I integrated modern technologies, AI question generation, anti-cheat features, live monitoring, and smooth UI/UX to create a complete digital viva experience. Bringing AI into my projects opened my eyes to a whole new world of possibilities."
  },
  {
    icon: "✨",
    title: "The Journey Continues...",
    description: "Looking back, what began as a simple college assignment in BCA has turned into a passionate journey of freelancing, building real products, integrating AI, and continuously pushing myself to learn something new every day. And honestly, this is just the beginning."
  }
];

const skillCategories = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    skills: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "REST API Development",
      "MVC Architecture",
      "JWT Authentication",
      "Socket.IO (Real-Time Features)",
      "Third-Party API Integration"
    ],
    isHighlighted: false
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive Web Design",
      "Bootstrap & Tailwind CSS",
      "Modern UI/UX Principles"
    ],
    isHighlighted: false
  },
  {
    icon: "🛠",
    title: "Backend & Database",
    skills: [
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "CRUD Operations",
      "Server-Side Validation",
      "Role-Based Access Control",
      "Performance Optimization"
    ],
    isHighlighted: false
  },
  {
    icon: "⚙️",
    title: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Vercel, Render, Netlify Deployments",
      "Environment Configuration"
    ],
    isHighlighted: false
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    skills: [
      "AI Integration in Web Apps",
      "Prompt Engineering Basics",
      "Chatbot / AI Response Integration",
      "Basic Automation Scripts"
    ],
    isHighlighted: true
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Canva"
    ],
    isHighlighted: false
  },
  {
    icon: "🧪",
    title: "Testing & Debugging",
    skills: [
      "API Testing (Postman)",
      "Console Debugging",
      "Error & Exception Handling",
      "Unit Testing Approach"
    ],
    isHighlighted: false
  },
  {
    icon: "🧑‍💼",
    title: "Freelancing & Project Management",
    skills: [
      "Client Communication",
      "Requirement Analysis",
      "Timeline & Task Planning",
      "Building Custom Web Solutions",
      "Project Deployment & Maintenance"
    ],
    isHighlighted: false
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xyevmbo.mongodb.net/${process.env.DB_NAME}`;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Achievement.deleteMany({});
    await SkillCategory.deleteMany({});
    console.log('Cleared existing data');

    // Insert achievements
    const insertedAchievements = await Achievement.insertMany(achievements);
    console.log(`Inserted ${insertedAchievements.length} achievements`);

    // Insert skill categories
    const insertedSkills = await SkillCategory.insertMany(skillCategories);
    console.log(`Inserted ${insertedSkills.length} skill categories`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
