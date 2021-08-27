import React from 'react';

function Card(props) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={`https://image.tmdb.org/t/p/original${props.card_img}`} className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title mb-4">{props.title}</h4>
            <p className="card-text">{props.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;