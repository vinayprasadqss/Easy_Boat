import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Easy Boat UI Design</h2>
      <ul>
        <li>
          <Link to="/auth/login">Login Page UI</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
