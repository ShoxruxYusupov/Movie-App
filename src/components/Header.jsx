import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <NavLink to="/">MovieDB</NavLink>
          </div>
          <div className="nav">
            <NavLink to="/trends/pages/1">Trends</NavLink>
            <NavLink to="/movies/pages/1">Movies</NavLink>
            <NavLink to="/tv/pages/1">Serials</NavLink>
            <NavLink to="/search">Search</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
