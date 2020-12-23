import React from "react";

// containers, components
import Gallery from "./containers/Gallery";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import PageNotFound from "./components/PageNotFound";

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
        <Route path={["/photos/:pattern/:page", "/"]} exact>
          <Gallery></Gallery>
        </Route>
        <Route path="/aboutme">
          <AboutMe></AboutMe>
        </Route>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
