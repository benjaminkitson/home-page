import React from 'react';
import aboutMe from '../../data/aboutMe';

function LeftContainer() {
  return (
    <div className="left-container">
      <div>
        <img className="avatar" src="./images/me.jpeg" />
      </div>
      <ul className="about-page__technologies">
        {aboutMe.technologies.map(t => <li className="technology__item">{t}</li>)}
      </ul>
      <a href={aboutMe.cv} download><button>Download my CV!</button></a>
    </div>
  )
}

export default LeftContainer;
