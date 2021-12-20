import "./App.css";
import React from "react";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={About} />

        <Route path="/portfolio/projects" component={Projects} />

        <Route path="/portfolio/services" component={Services} />

        <Route path="/portfolio/contact" component={Contact} />
      </Switch>
    </Router>

  );
};

export default App;
    // <Router>
    //     <Routes>
    //       <Route path="/portfolio/contact" caseSensitive={false} element={<Contact />} />
    //       <Route path="/portfolio/projects" caseSensitive={false} element={<Projects />} />
    //       <Route path="/portfolio/services" caseSensitive={false} element={<Services />} />
    //       <Route path="/portfolio" caseSensitive={false} element={<About />} />
    //     </Routes>
    //   </Router>