import React from "react";

//Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";

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
      </main>

      <Footer />
    </div>
  );
}

export default App;
