import React from 'react';
import aboutMe from '../../data/aboutMe';

function RightContainer() {
  return (
    <div className="right-container">
      <p>{aboutMe.description1}</p>
      <p>{aboutMe.description2}</p>
      <p>{aboutMe.description3}</p>
    </div>
  )
}

export default RightContainer;
