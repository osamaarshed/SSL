import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Prices from "./Pages/Prices/Prices";
import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import NavbarHeader from "./Components/NavbarHeader";
import Footer from "./Components/Footer";

// import GotSomething from "./Components/OurServices/GotSomething";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";
// import Home from "./Pages/Home/Home";
// import FAQ from "./Pages/FAQ/FAQ";
// import Prices from "./Pages/Prices/Prices";
// import Services from "./Pages/Services/Services";
// import Navbar from "./Components/Navbar";

function App() {
  const [mode, setMode] = useState("#06252c");
  return (
    <>
      <Router>
        <NavbarHeader mode={mode} />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Prices">
            <Prices />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
