import React from "react";
import Search from "../search/Search";

const Home = () => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-head">
          <div className="container"></div>
        </div>

        <Search />
      </section>
    </>
  );
};

export default Home;
