import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

const SearchResults = ({ results, addEntry, onSubmit }) => {
  return (
    <div>
      <h1 className="is-size-1">Search Results</h1>

      <form onSubmit={onSubmit} className="field is-grouped">
        <p className="control is-expanded">
          <input id="search-input" className="input" type="text" placeholder="Search artists, albums and more..." />
        </p>
        <p className="control">
          <button type="submit" className="button is-info">
            Search
          </button>
        </p>
      </form>

      <div className="columns is-multiline">
        {results.map((result) => {
          return <SearchCard key={result.id} result={result} addEntry={addEntry} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
