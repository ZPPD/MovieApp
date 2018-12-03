import React from "react";
import { Link } from "react-router-dom";
import Tmbdlogo from "./img/tmdblogo.png";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-grid">
          <section className="footer-left">
            <h2 className="footer-brand">Film Info</h2>
            <Link to="/" className="footer-icon">
              Home
            </Link>
          </section>
          <section className="footer-rigth">
            <img
              className="tmdb-logo"
              src={Tmbdlogo}
              alt="Powered by The Movie DB"
            />
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <i className="fas fa-laptop fa-2x" />
            </a>
            <a
              href="https://www.facebook.com/themoviedb"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <i className="fab fa-facebook-square fa-2x" />
            </a>
            <a
              href="https://twitter.com/themoviedb"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <i className="fab fa-twitter-square fa-2x" />
            </a>
          </section>
        </div>
        <div className="footer-copyright">
          <p>
            Powered By:
            <a href="https://zppd.github.io" className="portfolio">
              {" "}
              ZPPD
            </a>
          </p>
          <p>Copyright &copy;2018</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
