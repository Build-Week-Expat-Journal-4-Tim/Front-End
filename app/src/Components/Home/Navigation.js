import React from "react";
import {Link} from "react-router-dom";

export default function Nav (props) {

    return (
      <header className="navHeader">
      <nav>
            
      <ul>
      <li>
          <a className="link" href="https://stoic-snyder-289df1.netlify.app/">Home</a>
        </li>
      <li>
          <Link className="link" to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link className="link" to="/">Sign Up </Link>
        </li>
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        
      </ul>
    </nav>
    </header>
    )

}