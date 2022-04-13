import React from 'react';
import Card from './Card';
import projects from '../../projects';

console.log(projects)

function Home() {
  return (
    <div className="page">
      <h1 className="page__heading">
        Home
      </h1>
      <div className="cards">
        {projects.map((project) => (
          <Card name={project.name} image={project.image} description={project.description} />
        ))}
      </div>
    </div>
  )
}

export default Home;
