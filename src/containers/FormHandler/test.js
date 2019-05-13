import React from 'react'
import { fireEvent, cleanup } from 'react-testing-library'
import FormHandler from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'
import { addFavorite } from '../../actions/favorites'

jest.mock('uuid/v4', () => jest.fn(() => 1))

const store = mockStore({
  favorites: {
    filterTag: '',
    entities: {},
    ids: []
  }
})

describe('<FormHandler />', () => {
  afterEach(cleanup)
  it('Should render correctly', () => {
    const { container } = renderWithRedux(<FormHandler />, store)
    expect(container.firstChild).toMatchSnapshot()
  })
})
