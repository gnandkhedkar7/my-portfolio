import React from 'react';
import './Projects.css';
import projects_data from '../../assets/projects_data';

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>Achievements</h1>
        </div>
        <div className="projects-container">
            {projects_data.map((project, index) => {
                return <div className="projects-format" key={project.p_no}>
                    <h2>{project.p_name}</h2>
                    <p>{project.p_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects