import React from "react";

// containers, components
import Gallery from "./containers/Gallery";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

// styles
import GlobalStyle from "./GlobalStyles";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <Gallery></Gallery>
        </Route>
        <Route path="/aboutme">
          <AboutMe></AboutMe>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
