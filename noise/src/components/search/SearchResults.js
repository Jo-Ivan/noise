import Card from "../layout/Card";

const SearchResults = ({ results }) => {
  return (
    <div>
      <h1>Search Results</h1>

      {results.map((result) => {
        return <Card result={result} />;
      })}
    </div>
  );
};

export default SearchResults;
