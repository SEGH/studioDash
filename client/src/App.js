import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Articles from "./pages/Articles";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={(props) => (<Home {...props} />)} />
      <Route exact path="/articles" render={(props) => (<Articles {...props} />)} />
    </Router>
  );
}

export default App;
