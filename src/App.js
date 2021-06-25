import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageOne from "./components/pageOne";
import PageTwo from "./components/pageTwo";
import NavBar from "./components/nav";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/PageOne" component={PageOne} />
          <Route path="/PageTwo" component={PageTwo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
