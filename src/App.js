import React, { Suspense } from "react";

//Components
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Cost from "./components/Cost";
import FireTriangle from "./components/FireTriangle";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

//Styles
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div id="App">
        <NavBar />

        <main className="main-content">
          <Slideshow />

          <About />

          <Equipment />

          <Cost />

          <FireTriangle />
        </main>

        <Footer />

        <ScrollToTop />
      </div>
    </Suspense>
  );
}

export default App;
