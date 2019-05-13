import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { render } from 'react-testing-library'
import { Provider } from 'react-redux'

export const mockStore = mock => {
  const reducers = {}

  Object.keys(mock).forEach(key => {
    reducers[key] = () => mock[key]
  })

  return createStore(combineReducers(reducers))
}

export const renderWithRedux = (component, store) =>
  render(<Provider store={store}>{component}</Provider>)
