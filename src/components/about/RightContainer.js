import React from 'react';
import aboutMe from '../../data/aboutMe';

function RightContainer() {
  return (
    <div className="right-container">
      <div className="description">
        <p className="description__text">{aboutMe.description1}</p>
        <p className="description__text">{aboutMe.description2}</p>
        <p className="description__text">{aboutMe.description3}</p>
      </div>
    </div>
  )
}

export default RightContainer;
