import React from "react";

//Components
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Cost from "./components/Cost";
import Footer from "./components/Footer";

//Styles
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="App">
      <NavBar />

      <main className="main-content">
        <Slideshow />

        <About />

        <Equipment />

        <Cost />
      </main>

      <Footer />
    </div>
  );
}

export default App;
