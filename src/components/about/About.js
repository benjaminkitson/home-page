import React from 'react';
import aboutMe from '../../data/aboutMe';

function About() {
  return (
    <div className="page">
      <h1 className="page__heading">
        About me
      </h1>
      <div>
        <img className="avatar" src="./images/me.jpeg" />
      </div>
      <div>
        <ul>
          {aboutMe.technologies.map(t => <li className="about__technology">{t}</li>)}
        </ul>
      </div>
      <a href={aboutMe.cv} download> Click to download</a>
    </div>
  )
}

export default About;
