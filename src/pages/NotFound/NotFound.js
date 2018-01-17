import React from 'react';
import { Link } from 'react-router';
import styles from './NotFound.scss';

const NotFound = () => (
  <h1 className={styles.general}>
    Page is not found.
    <br />
    <Link to="/">Return on home page</Link>
  </h1>
);


export default NotFound;
