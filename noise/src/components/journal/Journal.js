import React from "react";
import Card from "../layout/Card";

const Journal = ({ entries }) => {
  console.log(entries);
  return (
    <div>
      <h1 className="is-size-1">Search Results</h1>
      <div className="columns is-multiline">
        {entries.map((result) => {
          return <Card key={result.albumId} result={result} />;
        })}
      </div>
    </div>
  );
};

export default Journal;
