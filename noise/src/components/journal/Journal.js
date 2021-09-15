import React from "react";
import JournalCard from "./JournalCard";

const Journal = ({ entries }) => {
  return (
    <div>
      <h1 className="is-size-1">Journal Entries</h1>
      <div className="columns is-multiline">
        {entries.map((result) => {
          return <JournalCard key={result.albumId} result={result} />;
        })}
      </div>
    </div>
  );
};

export default Journal;
