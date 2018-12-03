import React from "react";
import { Link } from "react-router-dom";
import "./HomeHeader.css";

class HomeHeader extends React.Component {
  state = {
    searchValue: ""
  };

  // handle search state
  handleSearchInput = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to="/" className="brand">
            <i className="fas fa-film fa-3x" />
          </Link>
          <form id="searchForm">
            <label htmlFor="searchInput" style={{ display: "none" }}>
              Search for Movies and TV shows
            </label>
            <input
              type="search"
              className="search-input"
              id="searchInput"
              placeholder="Search Movies and TV..."
              aria-label="Search the site for more movies"
              onChange={this.handleSearchInput}
            />
            {/* @To-Do add validation for search, ternary if no input, 404 not found */}
            <Link to={`/search-results/${this.state.searchValue}`}>
              <button className="search-button" type="submit">
                <i className="fas fa-search" />
              </button>
            </Link>
          </form>
          <Link to="/discover" className="discover">
            <i className="fas fa-compass fa-2x" />
          </Link>
        </nav>
      </header>
    );
  }
}

export default HomeHeader;
