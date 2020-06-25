import React from "react";
import {Link} from "react-router-dom";

export default function Nav (props) {

    return (
      <header className="navHeader">
      <nav>
            
      <ul>
        <li>
          <Link className="link" to="/">Sign Up </Link>
        </li>
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
    </header>
    )

}