import React from 'react';
import './WorkExperience.css'; // Regular CSS import

const experiences = [
  {
    title: 'SOFTWARE ENGINEER',
    company: 'Dutchess Management',
    link: 'https://www.dutchesspartners.com/',
    duration: 'Sept 2023 - Apr 2024',
    location: 'USA (Remote)',
    points: [
      'Leading front-end features for financial web applications focused on data visualization.',
      'Collaborated on API design with the backend team.',
      'Implemented ChatGPT-like chatbot using NextJS and Flowise.',
    ],
    tech: ['NextJS', 'ReactJS', 'NextUI', 'Auth0', 'Go', 'PostgreSQL', 'Flowise'],
  },
  {
    title: 'SOFTWARE ENGINEER',
    company: 'OPA Marketing',
    link: 'https://www.opa.marketing/',
    duration: 'Mar 2021 - Mar 2023',
    location: 'Mumbai, India',
    points: [
      'Led front-end design & development of Web and Mobile apps.',
      'Built mobile app with 4.5-star rating and 500k+ downloads.',
      'Created internal & marketing tools, lead generation apps, and dashboards.',
    ],
    tech: ['ReactJS', 'Ant Design', 'Flutter', 'FirebaseAuth', 'Firebase Analytics', 'FastAPI', 'PostgreSQL'],
  },
];

const WorkExperience= () => {
  return (
  <section className="container">
    <h2 className="heading">Work Experience</h2>
    <p className="description">My professional journey as a software engineer.</p>

    {experiences.map((exp, i) => (
      <div key={i} className="card">
        <h3 className="title">
          {exp.title}{' '}
          <span className="company">
            @ <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.company}</a>
          </span>
        </h3>
        <div className="meta">
          <span>📅 {exp.duration}</span>
          <span>📍 {exp.location}</span>
        </div>
        <ul className="points">
          {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
        </ul>
        <div className="techStack">
          {exp.tech.map((t, idx) => <span key={idx} className="tech">{t}</span>)}
        </div>
      </div>
    ))}
  </section>
  );
};

export default WorkExperience;