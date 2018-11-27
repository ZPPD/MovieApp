import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default () => {
  return (
    <div className="not-found">
      <Link to="/" className="brand">
        <i className="fas fa-film fa-4x" />
      </Link>
      <h1 className="not_found_message">404 Page Not Found</h1>
      <p className="not_found_p">Sorry, that page does not exist</p>
    </div>
  );
};
