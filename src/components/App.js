import React from "react";
import NavBar from "./NavBar.js"
import About from "./About.js"
import Home from "./Home.js"
import image from "../images.js";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <images />
    </div>
  );
}

export default App;
