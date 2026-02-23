import React from 'react'
import '../STYLE/about.css';
import { FaBriefcase, FaUniversity, FaChartLine, FaMedal, FaCheckCircle } from 'react-icons/fa';

// Static skills data - Numbered list format
const staticSkills = [
  {
    _id: 'skill-1',
    number: "01",
    title: "Full-Stack",
    subtitle: "Engineering",
    highlight: "MERN",
    skills: ["Next.js", "REST APIs", "JWT", "RBAC", "MVC"]
  },
  {
    _id: 'skill-2',
    number: "02",
    title: "Systems &",
    subtitle: "Architecture",
    highlight: "Scalable Backend Systems",
    skills: ["Performance Optimization", "Server Validation"]
  },
  {
    _id: 'skill-3',
    number: "03",
    title: "AI &",
    subtitle: "Deployment",
    highlight: "AI Integration",
    skills: ["Real-Time Systems", "Git", "Vercel", "Render"]
  },
  {
    _id: 'skill-4',
    number: "04",
    title: "Design &",
    subtitle: "Commerce",
    highlight: "Figma",
    skills: ["Adobe Illustrator", "Shopify (Liquid)"]
  }
];

const About = () => {
  const skillCategories = staticSkills;

  return (
    <div className="about-container">
      <div className="about-content-flow">
        {/* Experience Section */}
        <div className="section-content">
          <h2 className="section-heading-exp">Professional Experience</h2>
          
          <div className="experience-showcase-new">
            <div className="experience-header-new">
              <h3 className="experience-title-new">
                <span className="title-bold-new">Part-Time</span> Freelance Full-Stack Developer
              </h3>
              <div className="experience-meta-new">
                <span className="experience-badge">Self-Employed (Part-Time)</span>
                <span className="experience-duration-new">2022 – Present</span>
              </div>
              <p className="experience-intro-new">
                Delivered end-to-end web solutions for diverse clients, specializing in MERN stack applications with real-time features and AI integrations.
              </p>
            </div>

            <h4 className="projects-heading-new">Key Projects & Achievements:</h4>
            
            <div className="projects-grid-new">
              <div className="project-card-new">
                <div className="project-number-new">01</div>
                <div className="project-icon-new golden"><FaMedal /></div>
                <h5 className="project-title-new">1st Place – AIKYAM 3.0 National Techfest</h5>
                <p className="project-desc-new">
                  Contributed to MediSure, an AI-based platform for prescription safety analysis, improving drug safety detection
                </p>
              </div>

              <div className="project-card-new">
                <div className="project-number-new">02</div>
                <div className="project-icon-new green"><FaCheckCircle /></div>
                <h5 className="project-title-new">15+ Production Applications Delivered</h5>
                <p className="project-desc-new">
                  Successfully deployed 15+ full-stack applications spanning healthcare, finance, and education domains
                </p>
              </div>

              <div className="project-card-new">
                <div className="project-number-new">03</div>
                <div className="project-icon-new blue"><FaChartLine /></div>
                <h5 className="project-title-new">WVOMB Advisers – Financial Services Platform</h5>
                <p className="project-desc-new">
                  Developed a professional website for a financial services startup offering CFO consulting, GST advisory, tax debt recovery, and ERP
                </p>
              </div>

              <div className="project-card-new">
                <div className="project-number-new">04</div>
                <div className="project-icon-new blue"><FaBriefcase /></div>
                <h5 className="project-title-new">MediSure – AI-Powered Healthcare Management Platform</h5>
                <p className="project-desc-new">
                  Designed and developed a full-stack healthcare management system integrating AI driven drug safety detection
                </p>
              </div>

              <div className="project-card-new">
                <div className="project-number-new">05</div>
                <div className="project-icon-new orange"><FaUniversity /></div>
                <h5 className="project-title-new">AI Viva Portal – Ganpat University</h5>
                <p className="project-desc-new">
                  Built an AI-powered assessment system integrating adaptive questioning with anti-cheat mechanisms and real-time analytics to improve
                </p>
              </div>
            </div>

            <div className="experience-stats-new">
              <div className="stat-item-new">
                <span className="stat-number-new">15+</span>
                <span className="stat-label-new">Projects Delivered</span>
              </div>
              <div className="stat-item-new">
                <span className="stat-number-new">2.5+</span>
                <span className="stat-label-new">Years Experience</span>
              </div>
              <div className="stat-item-new">
                <span className="stat-number-new">1000+</span>
                <span className="stat-label-new">Users Impacted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="section-content skills-section-wrapper">
          <div className="skills-header-center">
            <span className="skills-label-center">TECH STACK</span>
            <h2 className="skills-heading-center">My Skills</h2>
          </div>
          
          <div className="skills-list-exact">
            {skillCategories.map((category) => (
              <div key={category._id} className="skill-row-exact">
                <div className="skill-number-exact">{category.number}</div>
                <div className="skill-title-exact">
                  <span className="title-bold-exact">{category.title}</span> {category.subtitle}
                </div>
                <div className="skill-tags-exact">
                  <span className="skill-highlight-exact">{category.highlight}</span>
                  {category.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                      <span className="skill-dot">·</span>
                      <span className="skill-item-exact">{skill}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
