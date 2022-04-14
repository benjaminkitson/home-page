import React from 'react';
import Card from './Card';
import projects from '../../data/projects';

console.log(projects)

function Projects() {
  return (
    <div className="page">
      <h1 className="page__heading">
        Projects
      </h1>
      <div className="cards">
        {projects.map((project) => (
          <div className="cards__card__container">
            <Card name={project.name} image={project.image} description={project.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
