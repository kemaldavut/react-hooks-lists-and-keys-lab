import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navbarItems = links.map((link, index) => {
    return <a key={index} href={"#"+link}>{link}</a>;
  })
  return <nav>{navbarItems}</nav>;

}

export default NavBar;
