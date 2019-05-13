import React from 'react'
import { cleanup } from 'react-testing-library'
import FilteredBy from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'

describe('<FilteredBy />', () => {
  afterEach(cleanup)
  describe('without tagName', () => {
    const store = mockStore({
      favorites: {
        filterTag: '',
        entities: {},
        ids: []
      }
    })

    it('Should render correctly', () => {
      const { container } = renderWithRedux(<FilteredBy />, store)

      expect(container.firstChild).toBeNull()
    })
  })

  describe('with tagName', () => {
    const store = mockStore({
      favorites: {
        filterTag: 'wallet',
        entities: {},
        ids: []
      }
    })

    it('Should render correctly', () => {
      const { container, queryByText } = renderWithRedux(<FilteredBy />, store)

      expect(queryByText(/wallet/g)).toBeTruthy()
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
