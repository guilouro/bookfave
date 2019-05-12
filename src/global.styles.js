import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #F2F3F5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
  }
`

export default GlobalStyle
