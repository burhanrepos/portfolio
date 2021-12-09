import './App.css';
import React from 'react';
import Services from './pages/Services';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import About from './pages/About';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
  //  <Switch>
  //     <Route exact path="/">
  //       <About />
  //     </Route>


  //     <Route path="/projects">
  //       <Projects /> 
  //      </Route>


  //     <Route path="/services">
  //       <Services />
  //     </Route>


  //     <Route path="/contact">
  //       <Contact />
  //     </Route>

  //   </Switch>
  <Router>
      <Routes>
        <Route path="/contact" caseSensitive={false} element={<Contact />} />
        <Route path="/projects" caseSensitive={false} element={<Projects />} />
        <Route path="/services" caseSensitive={false} element={<Services />} />
        <Route path="/" caseSensitive={false} element={<About />} />
      </Routes>
    </Router> 
  );
}

export default App;

