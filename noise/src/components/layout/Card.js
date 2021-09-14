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
              <p className="title is-4">
                {result.title} - {result.year}
              </p>
              <p className="is-size-5 has-text-weight-medium">Genre:</p>
              <ul>
                {result.genre.map((element, idx) => {
                  return <li key={idx}>{element}</li>;
                })}
              </ul>
              <p className="is-size-5 has-text-weight-medium">Format:</p>
              <ul>
                {result.format.map((element, idx) => {
                  return <li key={idx}>{element}</li>;
                })}
              </ul>
              <p className="is-size-5 has-text-weight-medium">Country:</p>
              <p>{result.country}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button href="#" className="card-footer-item button is-primary">
            Save album to journal
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Card;
