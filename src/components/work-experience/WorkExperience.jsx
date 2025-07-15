import React from "react";
import "./WorkExperience.css";
import experience_data from "../../assets/experience_data";

const WorkExperience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="heading">Work Experience</h2>
      <p className="description">
        {" "}
        I am an experienced Frontend Developer with over more than 3 years of
        experience. Here is my professional journey in brief -{" "}
      </p>

      {experience_data.map((exp, i) => (
        <div key={i} className="card">
          <h3 className="title">
            {exp.title}{" "}
            <span className="company">
              @{" "}
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
            </span>
          </h3>
          <div className="meta">
            <span>📅 {exp.duration}</span>
            <span>📍 {exp.location}</span>
          </div>
          <ul className="points">
            {exp.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
          <div className="techStack">
            {exp.tech.map((t, idx) => (
              <span key={idx} className="tech">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
