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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
