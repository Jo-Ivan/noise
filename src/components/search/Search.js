const Search = ({ onSubmit }) => {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">noise</h1>
          <h2 className="subtitle">Album note-taking made easy.</h2>
          <div className="box">
            <form onSubmit={onSubmit} className="field is-grouped">
              <p className="control is-expanded">
                <input
                  id="search-input"
                  className="input"
                  type="text"
                  placeholder="Search artists, albums and more..."
                />
              </p>
              <p className="control">
                <button type="submit" className="button is-info">
                  Search
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
