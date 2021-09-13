import { Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Journal from "./components/journal/Journal";

import "bulma/css/bulma.min.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/journal" component={Journal} />
    </div>
  );
};

export default App;
