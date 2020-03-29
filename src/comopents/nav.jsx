import React from "react";
import Brand from "../brand.png";

const Nav=()=>
{
      return <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="#/">
      <img src={Brand} alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
      </div>;
}

export default Nav;