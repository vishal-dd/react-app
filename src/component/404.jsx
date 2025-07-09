import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export function Error() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h3 className="notfound-subtitle">Sorry, we can’t find this page!</h3>
      <p className="notfound-text">
        Unfortunately, something went wrong and this page does not exist. Try using the search or return to the previous page.
      </p>
      <Link to="/" className="notfound-button">
        Back To Homepage
      </Link>
    </div>
  );
}
