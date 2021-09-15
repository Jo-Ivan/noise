import { Link } from "react-router-dom";

const JournalDetail = ({ entries, entryId, addNoteToEntry }) => {
  const entryIdToNum = parseInt(entryId);

  const entryChosen = entries.find((element) => element.albumId === entryIdToNum);

  const saveButtonHandler = (e) => {
    e.preventDefault();
    const inputElement = document.getElementById("item-input");
    const albumNote = inputElement.value;

    entryChosen.albumNote = albumNote;

    addNoteToEntry(albumNote, entryChosen.albumId);
  };

  return (
    <div>
      <Link to={`/journal`} className="button">
        Go back
      </Link>
      <h1 className="is-size-1">Journal Entry for {entryChosen.album}</h1>
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

          <textarea id="item-input" className="textarea is-primary" placeholder="Write a note"></textarea>
          <div className="control">
            <button onClick={saveButtonHandler} className="button is-primary is-fullwidth">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
