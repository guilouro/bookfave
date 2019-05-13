import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import FilteredBy from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'
import { filterByTag } from '../../actions/favorites'

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

    it('Should called close tag', () => {
      store.dispatch = jest.fn()
      const { container } = renderWithRedux(<FilteredBy />, store)

      fireEvent.click(container.querySelector('button'))
      expect(store.dispatch).toBeCalledWith(filterByTag(''))
    })
  })
})
