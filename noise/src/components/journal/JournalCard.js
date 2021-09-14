import React from "react";

const JournalCard = ({ result }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={result.image} alt={result.album} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {result.album} - {result.year}
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
      </div>
    </div>
  );
};

export default JournalCard;
