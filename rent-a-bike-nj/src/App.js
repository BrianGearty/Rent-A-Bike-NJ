
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import DataDisplay from "./Pages/DataDisplay";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/datadisplay" component={DataDisplay} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    <Footer />
    </Router>
      </div>
  );
}



export default App;