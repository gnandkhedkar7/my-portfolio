import React from 'react';
import './Skills.css';
import Skills_Data from '../../assets/skills_data';

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="skills-title">
            <h1>Skills & Expertise</h1>
        </div>
        <div className="skills-container">
            {Skills_Data.map((skill, index) => {
                return <div className="skills-format" key={skill.s_no}>
                    <h2>{skill.s_name}</h2>
                    <p>{skill.s_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills