import React from "react";

// containers, components
import Gallery from "./containers/Gallery";
import Nav from "./components/Nav";

// styles
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
