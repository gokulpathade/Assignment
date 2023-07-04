import React from "react";
import { Link } from "react-router-dom";

// import Home from './components/Home';

function Footer() {
  return (
    <div>
      <ul className="listfirst">
        <li className="lif">
          <a className="active" />
        </li>
        <li className="lif">
          <a href="/">Human Resource Management System</a>
        </li>
        {/* <li class="lif"><a> Wecare@goldsgym.in</a></li> */}
        {/* <li><a href="#about">About</a></li> */}
      </ul>
    </div>
  );
}

export default Footer;
