import React from "react";

// containers, components
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import PageNotFound from "./components/PageNotFound";
import { useModes } from "./components/useModes";
import { lightTheme, darkTheme } from "./components/Themes";

// styles
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  const [theme, themeToggler] = useModes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Nav></Nav>
        <Switch>
          <Route path={["/photos/:pattern/:page", "/"]} exact>
            <Gallery themeToggler={themeToggler}></Gallery>
          </Route>
          <Route path="/aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
