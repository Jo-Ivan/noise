import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Journal from "./components/journal/Journal";
import JournalDetail from "./components/journal/JournalDetail";
import About from "./components/pages/About";
import SearchResults from "./components/search/SearchResults";
import Footer from "./components/layout/Footer";

import "bulma/css/bulma.min.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [entries, setEntries] = useState([]);
  const [searchString, setSearchString] = useState("");

  let history = useHistory();

  const addEntry = (addedEntry) => {
    console.log("You added a new album to your journal list!");
    const updatedJournalList = [...entries, addedEntry];
    setEntries(updatedJournalList);
  };

  const addNoteToEntry = (note, albumId) => {
    console.log("You added a note to the entry!");
    // const entryChosen = entries.filter((element) => element.albumId === albumId);

    // const updatedJournalList = [...entries, entryChosen];
    // setEntries(updatedJournalList);

    // console.log(albumId);
  };

  const searchOptions = {
    key: "csNhJKxoebnQBUXTJsPi",
    secret: "nzojynjBCiQyyuDJWgIsTLjdUtHNFPXE",
    api: "https://api.discogs.com/database",
    endpoint: "/search"
  };

  const getResults = () => {
    const apiURL = `${searchOptions.api}${searchOptions.endpoint}?q=${searchString}&type=release&format=album&key=${searchOptions.key}&secret=${searchOptions.secret}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        setResults(res.results);
      });

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

  console.log(results);

  return (
    <>
      <Header />
      <div className="container is-fluid">
        <Route path="/" exact render={() => <Home lastSearch={searchString} onSubmit={searchFormSubmitHandler} />} />
        <Route
          path="/search-results"
          render={() => <SearchResults results={results} addEntry={addEntry} onSubmit={searchFormSubmitHandler} />}
        />
        <Route path="/journal" exact render={() => <Journal entries={entries} />} />
        <Route
          path="/journal/:entryId"
          render={(routerProps) => (
            <JournalDetail
              entries={entries}
              entryId={routerProps.match.params.entryId}
              addNoteToEntry={addNoteToEntry}
            />
          )}
        />
        <Route path="/about" render={About} />
      </div>
      <Footer />
    </>
  );
};

export default App;
