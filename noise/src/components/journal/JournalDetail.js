import { useState } from "react";

const JournalDetail = ({ entries, entryId }) => {
  const [entry, setEntry] = useState({});

  const entryIdToNum = parseInt(entryId);

  const entryChosen = entries.find((element) => element.albumId === entryIdToNum);

  console.log(entryChosen);

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={entryChosen.image} alt={entryChosen.album} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {entryChosen.album} - {entryChosen.year}
              </p>
              <p className="is-size-5 has-text-weight-medium">Genre:</p>
              <ul>
                {entryChosen.genre.map((element, idx) => {
                  return <li key={idx}>{element}</li>;
                })}
              </ul>
              <p className="is-size-5 has-text-weight-medium">Format:</p>
              <ul>
                {entryChosen.format.map((element, idx) => {
                  return <li key={idx}>{element}</li>;
                })}
              </ul>
              <p className="is-size-5 has-text-weight-medium">Country:</p>
              <p>{entryChosen.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
