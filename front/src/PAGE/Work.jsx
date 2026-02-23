import React, { useState } from "react";
import "../STYLE/work.css";
import { FaArrowRight } from "react-icons/fa";

// Static project data
const staticProjects = [
  {
    _id: "1",
    number: "01",
    name: "AAFinance",
    category: "Financial Services",
    description: "Loan & Financial Platform",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    link: "https://aa-finance.vercel.app/"
  },
  {
    _id: "2",
    number: "02",
    name: "WVOMB Advisers",
    category: "Financial Services",
    description: "Professional Platform",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    link: "https://wvomb.com/"
  },
  {
    _id: "3",
    number: "03",
    name: "B2B E-Commerce",
    category: "E-Commerce",
    description: "Scalable Platform",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80",
    link: "https://homeearns.vercel.app/"
  },
  {
    _id: "4",
    number: "04",
    name: "MediSure",
    category: "Healthcare AI",
    description: "Award Winning",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    link: "https://medi-sure.vercel.app/"
  }
];

const Work = () => {
  const [projectData] = useState(staticProjects); // Using static data only
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // API call commented out - using static data only
  // const FetchProduct = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://sarbazcvbackend.vercel.app/bin/getproject",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();

  //     if (data.messege && data.messege.length > 0) {
  //       const mappedData = data.messege.slice(0, 4).map((project, index) => ({
  //         _id: project._id,
  //         number: `0${index + 1}`,
  //         name: project.name,
  //         category: project.speciality?.split(",")[0] || "Project",
  //         description: project.description?.substring(0, 50) || "",
  //         imageUrl: project.imageUrl,
  //         link: project.link
  //       }));
  //       setProjectData(mappedData);
  //     } else {
  //       setProjectData(staticProjects);
  //     }
  //   } catch (err) {
  //     setProjectData(staticProjects);
  //   }
  // };

  // useEffect(() => {
  //   FetchProduct();
  // }, []);

  const handleProjectClick = (project) => {
    if (project.link === "#") {
      alert("Project is under maintenance.");
    } else {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div className="work-container">
      <div className="work-header">
        <span className="work-label">Work</span>
        <h1 className="work-title">Selected Work</h1>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={project._id}
            className={`project-column ${hoveredIndex === index ? 'hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image-wrapper">
              <img 
                src={project.imageUrl} 
                alt={project.name}
                className="project-image"
              />
            </div>
            
            <div className="project-number">{project.number}</div>
            
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-category">{project.category}</p>
              <div className="project-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
