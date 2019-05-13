import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #main {
    width: 100%;
    height: 100%;

    @media (min-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  body, html {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (min-width: 900px) {
      background-color: #F2F3F5;
    }
  }

  form {
    width: 100%;
  }
`

export default GlobalStyle
