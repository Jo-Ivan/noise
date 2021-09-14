import Card from "../layout/Card";

const SearchResults = ({ results, addEntry }) => {
  return (
    <div>
      <h1 className="is-size-1">Search Results</h1>

      <div className="columns is-multiline">
        {results.map((result) => {
          return <Card key={result.id} result={result} addEntry={addEntry} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
