import { createStore, compose } from 'redux'
import reducers from './reducers'

export default initialState => {
  const finaleCreateStore = compose(
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)

  const store = finaleCreateStore(reducers, initialState)

  /* istanbul ignore if */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers') // eslint-disable-line
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
