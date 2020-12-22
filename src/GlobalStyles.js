import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
    }
    #root {
        height: 100vh;

    }
    .App {
        height: 100vh;
    }
    
`;

export default GlobalStyle;
