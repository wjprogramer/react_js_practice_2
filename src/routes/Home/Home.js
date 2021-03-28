import React from 'react';
import { Link } from 'react-router-dom';

import { H1 } from '../../components';

const Home = () => {
  return (
    <>
      <H1>Home</H1>
      <ul>
        <li>
          <Link to="/hoc">Higher Order Component</Link>
        </li>
      </ul>
    </>    
  );
}

export default Home;