import React, { useState } from "react";
import "../STYLE/work.css";
import { useEffect, useRef } from "react";
import { FaLink } from "react-icons/fa";
import gsap from "gsap";
import { BlinkBlur } from "react-loading-indicators";
import ScrollTrigger from "gsap/ScrollTrigger";
import AI from "../assets/AI.png";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const [projectData, setprojectData] = useState([]);
  const [load, setload] = useState(true);
  const FetchProduct = async () => {
    try {
      const response = await fetch(
        "https://sarbazcvbackend.vercel.app/bin/getproject",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data.messege.length > 0) {
        setprojectData(data.messege);
        setload(false);
      }
    } catch (err) {
      setprojectData([]);
    }
  };
  useEffect(() => {
    FetchProduct();
  }, []);

  const imageRef = useRef();
  useEffect(() => {
    gsap.utils.toArray(".project-display img").forEach((img) => {
      gsap.to(img, {
        width: "85%",
        height: "80%",
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 50%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, [projectData]);
  const Handleproject = (e, i, data) => {
    e.preventDefault();
    if (i == 2) {
      alert("Project Is Under Maintenance. Will Be Live in 2 Days");
    } else {
      window.location.href = data.link;
    }
  };

  return (
    <>
      <div className="work-main">
        <p>Work</p>
        <h1>Selected Projects</h1>
        {load && (
          <BlinkBlur
            color="#929292"
            size="large"
            text="Loading.."
            textColor=""
          />
        )}

        <div className="project-flex">
          {projectData.length > 0 ? (
            projectData.map((data, i) => {
              const stringArray = data.speciality.split(",");
              const trimmedArray = stringArray.map((item) => item.trim());

              return (
                <div className="project-div" key={i}>
                  <div className="project-display">
                    <img ref={imageRef} src={data.imageUrl} alt="project img" />
                  </div>

                  <div className="project-content">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <a
                      onClick={(e) => Handleproject(e, i, data)}
                      className="project-link-btn"
                    >
                      Live Demo <FaLink />
                    </a>
                    <div className="btn-info">
                      {trimmedArray.length > 0 &&
                        trimmedArray.map((data, i) => {
                          return <button key={i}>{data}</button>;
                        })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
