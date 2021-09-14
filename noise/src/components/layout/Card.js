import React from "react";

const Card = ({ result }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={result.cover_image} alt={result.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{result.title}</p>
              {/* <p className="subtitle is-6">{result.genre}</p> */}
              <p>{result.genre}</p>

              <p>{result.year}</p>
              <p>{result.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
