import React from "react";

const Search = () => {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">Noise</h1>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Search artists, albums and more..." />
              </p>
              <p className="control">
                <a className="button is-info">Search</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
