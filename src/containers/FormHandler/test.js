import React from 'react'
import FormHandler from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'

const store = mockStore({
  favorites: {
    filterTag: '',
    entities: {},
    ids: []
  }
})

describe('<FormHandler />', () => {
  it('Should render correctly', () => {
    const { container } = renderWithRedux(<FormHandler />, store)
    expect(container.firstChild).toMatchSnapshot()
  })
})
