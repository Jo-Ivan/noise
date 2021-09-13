import "bulma/css/bulma.min.css";
import Header from "./components/layout/Header";
import Search from "./components/search/Search";

const App = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <div className="container">
          <Header />
        </div>
      </div>

      <Search />
    </section>
  );
};

export default App;
