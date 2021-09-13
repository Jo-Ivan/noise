const Search = ({ onSubmit }) => {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">Noise</h1>
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
                <button className="button is-info">Search</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
