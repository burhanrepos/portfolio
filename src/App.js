import "./App.css";
import React from "react";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

const App = () => {
  return (

    <Router>
    <Switch>
      <Route exact path="/portfolio">
        <About/>
      </Route>

      <Route path="/portfolio/projects">
      <Projects/>
      </Route> 

      <Route path="/portfolio/services">
        <Services/>
      </Route>

      <Route path="/portfolio/contact">
        <Contact/>
      </Route>
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