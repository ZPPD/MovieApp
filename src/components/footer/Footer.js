import React from "react";
import { Link } from "react-router-dom";
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
            <img className="tmdb-logo" src="./img/tmdblogo.png" />
            <a href="#" className="social">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="#" className="social">
              <i className="fab fa-facebook-square fa-2x" />
            </a>
            <a href="#" className="social">
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
