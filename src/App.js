import React from "react";

//Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

//Styles
import "./styles/App.scss";

function App() {
  return (
    <div id="App">
      <NavBar />

      <main className="main-content">hello</main>

      <Footer />
    </div>
  );
}

export default App;
