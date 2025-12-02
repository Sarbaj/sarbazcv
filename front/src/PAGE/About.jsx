import React, { useState, useEffect } from 'react'
import '../STYLE/about.css';

// Static fallback data
const staticAchievements = [
  {
    _id: 'static-1',
    icon: "🎓",
    title: "BCA First Year - The Spark",
    description: "My journey into development started long before I understood terms like 'full-stack' or 'scalability.' It began in Semester 2, when I created my very first website. I still remember the excitement of experimenting with layouts, colors, and simple animations. What surprised me the most was not the website itself, but the reaction it received—my design looked better than the final-year students' projects, and even my teachers appreciated the effort. That moment gave me the confidence I didn't know I needed."
  },
  {
    _id: 'static-2',
    icon: "💼",
    title: "Second Year - First Freelance",
    description: "By the time I entered Second Year, my curiosity had turned into a skill, and my skill began turning into opportunities. I built my first freelancing project—an Online Tournament Management System, complete with player entry, match scheduling, result management, and smooth UI. It became the first project that made me feel like, 'Yes, this is what I want to do in life.'"
  },
  {
    _id: 'static-3',
    icon: "🏆",
    title: "Final Year - Rank 1 Achievement",
    description: "In Final Year, everything came full circle. I developed a full software solution for my academic project and ended up getting Rank 1 in Software Development. That achievement validated the countless hours I spent debugging, designing, and learning."
  },
  {
    _id: 'static-4',
    icon: "🚀",
    title: "MCA - Professional Growth",
    description: "After BCA, I started my MCA journey, and things only got better. I created a B2B website for a startup, handling everything from product listings and authentication to modern responsive UI. I also developed a service-based company website, helping them showcase their business with a clean and professional online presence."
  },
  {
    _id: 'static-5',
    icon: "🤖",
    title: "AI Integration - New Horizons",
    description: "One of the most exciting moments came when Ganpat University's MCA faculty approached me to build an AI-powered website for their AI Viva Portal. I integrated modern technologies, AI question generation, anti-cheat features, live monitoring, and smooth UI/UX to create a complete digital viva experience. Bringing AI into my projects opened my eyes to a whole new world of possibilities."
  },
  {
    _id: 'static-6',
    icon: "✨",
    title: "The Journey Continues...",
    description: "Looking back, what began as a simple college assignment in BCA has turned into a passionate journey of freelancing, building real products, integrating AI, and continuously pushing myself to learn something new every day. And honestly, this is just the beginning."
  }
];

const staticSkills = [
  {
    _id: 'skill-1',
    icon: "💻",
    title: "Full-Stack Development",
    skills: ["MERN Stack (MongoDB, Express, React, Node.js)", "REST API Development", "MVC Architecture", "JWT Authentication", "Socket.IO (Real-Time Features)", "Third-Party API Integration"],
    isHighlighted: false
  },
  {
    _id: 'skill-2',
    icon: "🎨",
    title: "Frontend Development",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Responsive Web Design", "Bootstrap & Tailwind CSS", "Modern UI/UX Principles"],
    isHighlighted: false
  },
  {
    _id: 'skill-3',
    icon: "🛠",
    title: "Backend & Database",
    skills: ["Node.js & Express.js", "MongoDB & Mongoose", "CRUD Operations", "Server-Side Validation", "Role-Based Access Control", "Performance Optimization"],
    isHighlighted: false
  },
  {
    _id: 'skill-4',
    icon: "⚙️",
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Postman", "VS Code", "Vercel, Render, Netlify Deployments", "Environment Configuration"],
    isHighlighted: false
  },
  {
    _id: 'skill-5',
    icon: "🤖",
    title: "AI & Automation",
    skills: ["AI Integration in Web Apps", "Prompt Engineering Basics", "Chatbot / AI Response Integration", "Basic Automation Scripts"],
    isHighlighted: true
  },
  {
    _id: 'skill-6',
    icon: "🎨",
    title: "Graphic Design",
    skills: ["Figma", "Adobe Illustrator", "Canva"],
    isHighlighted: false
  },
  {
    _id: 'skill-7',
    icon: "🧪",
    title: "Testing & Debugging",
    skills: ["API Testing (Postman)", "Console Debugging", "Error & Exception Handling", "Unit Testing Approach"],
    isHighlighted: false
  },
  {
    _id: 'skill-8',
    icon: "🧑‍💼",
    title: "Freelancing & Project Management",
    skills: ["Client Communication", "Requirement Analysis", "Timeline & Task Planning", "Building Custom Web Solutions", "Project Deployment & Maintenance"],
    isHighlighted: false
  }
];

const About = () => {
  // Initialize with static data
  const [achievements, setAchievements] = useState(staticAchievements);
  const [skillCategories, setSkillCategories] = useState(staticSkills);
  const [dataSource, setDataSource] = useState('static'); // 'static' or 'api'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [achievementsRes, skillsRes] = await Promise.all([
          fetch('https://sarbazcvbackend.vercel.app/bin/achievements'),
          fetch('https://sarbazcvbackend.vercel.app/bin/skillcategories')
        ]);

        const achievementsData = await achievementsRes.json();
        const skillsData = await skillsRes.json();

        // Only update if we got valid data from API
        if (achievementsData && achievementsData.data && achievementsData.data.length > 0) {
          setAchievements(achievementsData.data);
          setDataSource('api');
        }
        if (skillsData && skillsData.data && skillsData.data.length > 0) {
          setSkillCategories(skillsData.data);
          setDataSource('api');
        }
      } catch (error) {
        console.error('Error fetching data, using static fallback:', error);
        // Keep static data on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about-container">
      <div className="about-hero">
        <span className="about-label">Introduction</span>
        <h1 className="about-title">
          Hi, I'm <span className="highlight">Sarbaz Malek</span>
        </h1>
        <p className="about-subtitle">Full-Stack Developer & Problem Solver</p>
      </div>

      <div className="about-content-flow">
        {/* My Journey Section */}
        <div className="section-content">
          <h2 className="section-heading">My Journey</h2>
          <div className="journey-timeline">
            {achievements.map((achievement) => (
              <div key={achievement._id} className="timeline-item">
                <div className="timeline-marker">{achievement.icon}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="section-content">
          <h2 className="section-heading">Professional Experience</h2>
          
          <div className="experience-showcase">
            <div className="experience-card-modern">
              <div className="experience-icon">💼</div>
              <div className="experience-header-modern">
                <h3 className="experience-title-modern">Freelance Full-Stack Developer</h3>
                <div className="experience-meta">
                  <span className="experience-type">Self-Employed</span>
                  <span className="experience-duration-modern">2022 - Present</span>
                </div>
              </div>
              
              <div className="experience-description-modern">
                <p className="experience-intro">
                  Delivered end-to-end web solutions for diverse clients, specializing in MERN stack 
                  applications with real-time features and AI integrations.
                </p>
                
                <div className="experience-highlights">
                  <h4>Key Projects & Achievements:</h4>
                  <div className="highlight-grid">
                    <div className="highlight-item-exp">
                      <span className="highlight-icon">🏆</span>
                      <div>
                        <strong>Tournament Management System</strong>
                        <p>Complete player management, scheduling, and results tracking</p>
                      </div>
                    </div>
                    <div className="highlight-item-exp">
                      <span className="highlight-icon">🏢</span>
                      <div>
                        <strong>B2B E-Commerce Platform</strong>
                        <p>Product listings, authentication, and responsive UI</p>
                      </div>
                    </div>
                    <div className="highlight-item-exp">
                      <span className="highlight-icon">🤖</span>
                      <div>
                        <strong>AI Viva Portal - Ganpat University</strong>
                        <p>AI question generation, anti-cheat, live monitoring</p>
                      </div>
                    </div>
                    <div className="highlight-item-exp">
                      <span className="highlight-icon">💼</span>
                      <div>
                        <strong>Service-Based Company Website</strong>
                        <p>Professional business showcase with modern UI/UX</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-stats">
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects Delivered</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Users Impacted</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-note">
              <span className="note-icon">✨</span>
              <p>
                <strong>What I Bring:</strong> A proven track record of delivering scalable, 
                user-focused solutions with modern technologies. From concept to deployment, 
                I handle the complete development lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-content">
          <h2 className="section-heading">My Skills</h2>
          
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <div 
                key={category._id} 
                className={`skill-category ${category.isHighlighted ? 'highlight-category' : ''}`}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="category-skills">
                  {category.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">💻</span>
                  <h3 className="category-title">Full-Stack Development</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">MERN Stack (MongoDB, Express, React, Node.js)</span>
                  <span className="skill-badge">REST API Development</span>
                  <span className="skill-badge">MVC Architecture</span>
                  <span className="skill-badge">JWT Authentication</span>
                  <span className="skill-badge">Socket.IO (Real-Time Features)</span>
                  <span className="skill-badge">Third-Party API Integration</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">🎨</span>
                  <h3 className="category-title">Frontend Development</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">HTML5 & CSS3</span>
                  <span className="skill-badge">JavaScript (ES6+)</span>
                  <span className="skill-badge">React.js</span>
                  <span className="skill-badge">Responsive Web Design</span>
                  <span className="skill-badge">Bootstrap & Tailwind CSS</span>
                  <span className="skill-badge">Modern UI/UX Principles</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">🛠</span>
                  <h3 className="category-title">Backend & Database</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">Node.js & Express.js</span>
                  <span className="skill-badge">MongoDB & Mongoose</span>
                  <span className="skill-badge">CRUD Operations</span>
                  <span className="skill-badge">Server-Side Validation</span>
                  <span className="skill-badge">Role-Based Access Control</span>
                  <span className="skill-badge">Performance Optimization</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">⚙️</span>
                  <h3 className="category-title">DevOps & Tools</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">Git & GitHub</span>
                  <span className="skill-badge">Postman</span>
                  <span className="skill-badge">VS Code</span>
                  <span className="skill-badge">Vercel, Render, Netlify Deployments</span>
                  <span className="skill-badge">Environment Configuration</span>
                </div>
              </div>

              <div className="skill-category highlight-category">
                <div className="category-header">
                  <span className="category-icon">🤖</span>
                  <h3 className="category-title">AI & Automation</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">AI Integration in Web Apps</span>
                  <span className="skill-badge">Prompt Engineering Basics</span>
                  <span className="skill-badge">Chatbot / AI Response Integration</span>
                  <span className="skill-badge">Basic Automation Scripts</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">🎨</span>
                  <h3 className="category-title">Graphic Design</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">Figma</span>
                  <span className="skill-badge">Adobe Illustrator</span>
                  <span className="skill-badge">Canva</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">🧪</span>
                  <h3 className="category-title">Testing & Debugging</h3>
                </div>
                <div className="category-skills">
                  <span className="skill-badge">API Testing (Postman)</span>
                  <span className="skill-badge">Console Debugging</span>
                  <span className="skill-badge">Error & Exception Handling</span>
                  <span className="skill-badge">Unit Testing Approach</span>
                </div>
              </div>

      </div>
    </div>
  )
}

export default About
