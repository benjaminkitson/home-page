import React from 'react';

function Card(props) {
  return (
    <div className="cards__card">
      <div className="card__preview-image"/>
      <div className="card__details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card;
