import React from 'react'
import Main from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'

const store = mockStore({
  favorites: {
    filterTag: '',
    entities: {},
    ids: []
  }
})

describe('Tag', () => {
  it('Should render correctly', () => {
    const { container } = renderWithRedux(<Main />, store)
    expect(container).toMatchSnapshot()
  })
})
