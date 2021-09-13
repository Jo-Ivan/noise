import Search from "../search/Search";

const Home = ({ onSubmit }) => {
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-head">
          <div className="container"></div>
        </div>

        <Search onSubmit={onSubmit} />
      </section>
    </>
  );
};

export default Home;
