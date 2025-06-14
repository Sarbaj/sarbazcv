import React, { useState } from 'react'
import '../STYLE/work.css';
import { useEffect,useRef  } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AI from '../assets/AI.png';
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const [projectData, setprojectData] = useState([])
  const FetchProduct=async()=>{
    try{
     const response = await fetch('http://localhost:5050/bin/getproject', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    const data=await response.json()
    
   console.log(data);
   
      setprojectData(data.messege)
    
    }
    catch(err){
      setprojectData([])
    }
  }
useEffect(() => {
  FetchProduct()
}, [])

      const imageRef = useRef();
  useEffect(() => {
    gsap.utils.toArray('.project-display img').forEach((img) => {
      gsap.to(img, {
        width: '85%',
        height:'80%',
        duration:1,
        scrollTrigger: {
          trigger: img,
          start: 'top 50%',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    });
  }, [projectData]);
const Handleproject=()=>{
  alert("Project Will Live Soon")
}

  return (
  <>
  <div className="work-main">
    <p>Work</p>
    <h1>Selected Projects</h1>
    <div className="project-flex">

    {projectData.length>0 ?(projectData.map((data,i)=>{
    const stringArray = data.speciality.split(',');
  const trimmedArray = stringArray.map(item => item.trim());
  console.log(trimmedArray);
  
    return <div className="project-div" key={i} >
        <div className="project-display">
            <img ref={imageRef}  src={data.imageUrl} alt="project img" />
        </div>
        <h2>{data.name}</h2>
        <a onClick={Handleproject} style={{background:"black",padding:"8px 15px",width:"8rem",textDecoration:"none",color:"white",borderRadius:"8px"}}>Live Demo</a>
        <p>{data.description}</p>
        <div className="btn-info">
          {trimmedArray.length>0 && (trimmedArray.map((data,i)=>{
            return <button key={i}>{data}</button>
          }))}
           
        </div>
    </div>

    })):(<div>Project Will Live In 2Days </div>)}
    
      
    </div>
  </div>
  </>
  )
}

export default Work
