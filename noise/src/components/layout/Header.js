import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBurgerActive, setisBurgerActive] = useState(false);

  return (
    <nav id="nav" className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <p className="is-size-5">noise</p>
        </Link>

        <button
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-main"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar-main" className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="/journal">
            Journal
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
