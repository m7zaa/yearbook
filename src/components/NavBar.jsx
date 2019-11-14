import React from "react";
import { Link } from "react-router-dom";




function NavBar(){
  // var navBarButton = {
  //   margin: "0 50px 0 50px",
  //   display: "inline-block",
  //   padding: "14px 16px",
  //   backgroundColor: "blanchedalmond",
  //   border: "solid 2px burlywood",
  // };
  var navBar = {
    whiteSpace: "normal",
    textAlign: "center",
    wordBreak: "break-all",

  };
  var navLink = {
    color: "black",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-toggleable-lg navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container" style={navBar}>
        <button className="nav-link text-dark" ><Link style={navLink} to = "/">Home</Link></button>
        <button className="nav-link text-dark" ><Link style={navLink}  to = "/Student">Students</Link></button>
        <button className="nav-link text-dark" ><Link style={navLink}  to = "/Class">Classes</Link></button>

      </div>
    </nav>
  );
}
export default NavBar;


