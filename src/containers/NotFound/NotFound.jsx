import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';


const NotFound = () => (
  <div className="not-found">
    <div className="message">
      <h1>
          Page Not Found
      </h1>
    </div>
    <Link to="/">
      Take me back to home
    </Link>
  </div>
);

export default NotFound;
