import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Journal from "./components/journal/Journal";
import About from "./components/pages/About";
import SearchResults from "./components/search/SearchResults";

import "bulma/css/bulma.min.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [entries, setEntries] = useState([]);
  const [searchString, setSearchString] = useState("");

  let history = useHistory();

  const addEntry = (entry) => {
    console.log(entry);
    const updatedJournalList = [...entries, entry];
    setEntries(updatedJournalList);
  };

  console.log(entries);

  const searchOptions = {
    key: "csNhJKxoebnQBUXTJsPi",
    secret: "nzojynjBCiQyyuDJWgIsTLjdUtHNFPXE",
    api: "https://api.discogs.com/database",
    endpoint: "/search"
  };

  const getResults = () => {
    const apiURL = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}&type=release&format=album&key=${searchOptions.key}&secret=${searchOptions.secret}`;

    // https://api.discogs.com/database/search?q=cortex?type=master&key=csNhJKxoebnQBUXTJsPi&secret=nzojynjBCiQyyuDJWgIsTLjdUtHNFPXE

    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setResults(res.results);
      });

    // const apiURL2 = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchString}&api_key=bb1c4d33764f3967ed84b4199bd3da6d&format=json`;

    // fetch(apiURL2)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.results.trackmatches.track);
    //     setResults(res.results.trackmatches.track);
    //   });

    history.push("/search-results");
  };

  useEffect(() => {
    if (searchString !== "") {
      getResults(searchString);
    }
  }, [searchString]);

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    const searchInputElement = document.getElementById("search-input");
    const searchInput = searchInputElement.value;
    setSearchString(searchInput);
    searchInputElement.value = "";
  };

  return (
    <>
      <Header />
      <div className="container">
        <Route path="/" exact component={() => <Home lastSearch={searchString} onSubmit={searchFormSubmitHandler} />} />
        <Route path="/search-results" component={() => <SearchResults results={results} addEntry={addEntry} />} />
        <Route path="/journal" component={Journal} />
        <Route path="/about" component={About} />
      </div>
    </>
  );
};

export default App;
