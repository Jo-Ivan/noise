import { useState } from "react";

const Header = () => {
  const [isBurgerActive, setisBurgerActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          Home
        </a>

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
          <div className="navbar-item">Journal</div>
          <div className="navbar-item">About</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
