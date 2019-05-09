import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './components/main'
import GlobalStyle from './global.styles'
import configureStore from './store'

const App = () => (
  <Provider store={configureStore()}>
    <GlobalStyle />
    <Main />
  </Provider>
)

render(<App />, document.getElementById('main'))
