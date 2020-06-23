import React from "react";
import {Link} from "react-router-dom";

export default function Nav (props) {

    return (
    <nav>
          
    <ul>
      <li>
        <Link to="/">Sign Up </Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
    )

}