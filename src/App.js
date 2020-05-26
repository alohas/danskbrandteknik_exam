import React from "react";

//Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";

//Styles
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="App">
      <NavBar />

      <main className="main-content">
        <Slideshow />
      </main>

      <Footer />
    </div>
  );
}

export default App;
