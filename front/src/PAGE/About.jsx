import React from 'react'
import '../STYLE/about.css';

const About = () => {
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
            <div className="timeline-item">
              <div className="timeline-marker">🎓</div>
              <div className="timeline-content">
                <h3 className="timeline-title">BCA First Year - The Spark</h3>
                <p>
                  My journey into development started long before I understood terms like "full-stack" or "scalability." 
                  It began in <strong>Semester 2</strong>, when I created my very first website. I still remember the 
                  excitement of experimenting with layouts, colors, and simple animations. What surprised me the most 
                  was not the website itself, but the reaction it received—<span className="highlight-inline">my design 
                  looked better than the final-year students' projects</span>, and even my teachers appreciated the effort. 
                  That moment gave me the confidence I didn't know I needed.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">💼</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Second Year - First Freelance</h3>
                <p>
                  By the time I entered Second Year, my curiosity had turned into a skill, and my skill began turning 
                  into opportunities. I built my first freelancing project—an <strong>Online Tournament Management System</strong>, 
                  complete with player entry, match scheduling, result management, and smooth UI. It became the first 
                  project that made me feel like, <em>"Yes, this is what I want to do in life."</em>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🏆</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Final Year - Rank 1 Achievement</h3>
                <p>
                  In Final Year, everything came full circle. I developed a full software solution for my academic 
                  project and ended up getting <span className="achievement-badge">Rank 1 in Software Development</span>. 
                  That achievement validated the countless hours I spent debugging, designing, and learning.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🚀</div>
              <div className="timeline-content">
                <h3 className="timeline-title">MCA - Professional Growth</h3>
                <p>
                  After BCA, I started my MCA journey, and things only got better. I created a <strong>B2B website</strong> for a 
                  startup, handling everything from product listings and authentication to modern responsive UI. I 
                  also developed a service-based company website, helping them showcase their business with a clean 
                  and professional online presence.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🤖</div>
              <div className="timeline-content">
                <h3 className="timeline-title">AI Integration - New Horizons</h3>
                <p>
                  One of the most exciting moments came when <strong>Ganpat University's MCA faculty</strong> approached me to build 
                  an AI-powered website for their <span className="highlight-inline">AI Viva Portal</span>. I integrated modern technologies, 
                  AI question generation, anti-cheat features, live monitoring, and smooth UI/UX to create a complete digital 
                  viva experience. Bringing AI into my projects opened my eyes to a whole new world of possibilities.
                </p>
              </div>
            </div>

            <div className="timeline-item highlight-item">
              <div className="timeline-marker">✨</div>
              <div className="timeline-content">
                <h3 className="timeline-title">The Journey Continues...</h3>
                <p>
                  Looking back, what began as a simple college assignment in BCA has turned into a passionate journey 
                  of freelancing, building real products, integrating AI, and continuously pushing myself to learn 
                  something new every day. <strong>And honestly, this is just the beginning.</strong>
                </p>
              </div>
            </div>
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

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🧑‍💼</span>
                <h3 className="category-title">Freelancing & Project Management</h3>
              </div>
              <div className="category-skills">
                <span className="skill-badge">Client Communication</span>
                <span className="skill-badge">Requirement Analysis</span>
                <span className="skill-badge">Timeline & Task Planning</span>
                <span className="skill-badge">Building Custom Web Solutions</span>
                <span className="skill-badge">Project Deployment & Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
