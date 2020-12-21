import React from "react";

// containers
import Gallery from "./containers/Gallery";

// styles
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
