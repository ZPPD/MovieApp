import React from "react";
import "./HomeHeader.css";

class HomeHeader extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <a href="#" className="brand">
            <i className="fas fa-film fa-3x" />
          </a>
          <form id="searchForm">
            <label htmlFor="searchInput" style={{ display: "none" }}>
              Search for Movies and TV shows
            </label>
            <input
              type="search"
              class="search-input"
              id="searchInput"
              placeholder="Search Movies and TV..."
              aria-label="Search the site for more movies"
            />
            <button className="search-button">
              <i className="fas fa-search" />
            </button>
          </form>
          <div />
        </nav>
      </header>
    );
  }
}

export default HomeHeader;
