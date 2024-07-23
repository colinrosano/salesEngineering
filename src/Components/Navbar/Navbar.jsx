import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="navLink" to={"/"}>
        Home
      </Link>
      <Link className="navLink" to={"/subject-rights"}>
        Subject Rights
      </Link>
      <Link className="navLink" to={"/unified-consent"}>
        Unified Consent
      </Link>
      <Link className="navLink" to={"/trust-hub"}>
        TrustHub
      </Link>
    </nav>
  );
};

export default Navbar;
