import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const searchOptions = {
    key: "csNhJKxoebnQBUXTJsPi",
    secret: "nzojynjBCiQyyuDJWgIsTLjdUtHNFPXE",
    api: "https://api.discogs.com/database",
    endpoint: "/search"
  };

  const url = `${searchOptions.api}${searchOptions.endpoint}?q=Nirvana&key=${searchOptions.key}&secret=${searchOptions.secret}`;

  const [songs, setSongs] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setSongs(res.data);
    });
  }, []);

  console.log(songs);

  if (!songs) return null;

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
