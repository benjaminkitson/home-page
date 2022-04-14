import React from 'react';
import aboutMe from '../../data/aboutMe';

function LeftContainer() {
  return (
    <div className="left-container">
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

export default LeftContainer;
