import React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import FavoriteList from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'
import { removeFavorite, filterByTag, removeTag } from '../../actions/favorites'

describe('<FavoriteList />', () => {
  afterEach(cleanup)
  describe('without data', () => {
    const store = mockStore({
      favorites: {
        filterTag: '',
        entities: {},
        ids: []
      }
    })

    it('Should render correctly', () => {
      const { container, queryByText } = renderWithRedux(
        <FavoriteList />,
        store
      )
      expect(queryByText(/We don't have any favorite/g)).toBeTruthy()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('with data', () => {
    const store = mockStore({
      favorites: {
        filterTag: 'wallet',
        entities: {
          1: {
            id: 1,
            title: 'Lorem Ipsum',
            link: 'www.loremipsum.com',
            tags: {
              wallet: true
            }
          }
        },
        ids: [1]
      }
    })

    it('Should render correctly', () => {
      const { container, queryByText } = renderWithRedux(
        <FavoriteList />,
        store
      )

      expect(queryByText(/Lorem Ipsum/g)).toBeTruthy()
      expect(queryByText(/www.loremipsum.com/g)).toBeTruthy()
      expect(queryByText(/wallet/g)).toBeTruthy()
      expect(container.firstChild).toMatchSnapshot()
    })

    it('Should called onRemoveItem', () => {
      store.dispatch = jest.fn()
      const { queryByText } = renderWithRedux(<FavoriteList />, store)

      fireEvent.click(queryByText(/Delete/g))
      expect(store.dispatch).toBeCalledWith(removeFavorite(1))
    })

    it('Should called onFilterTag', () => {
      store.dispatch = jest.fn()
      const { queryByText } = renderWithRedux(<FavoriteList />, store)

      fireEvent.click(queryByText(/wallet/g))
      expect(store.dispatch).toBeCalledWith(filterByTag('wallet'))
    })

    it('Should called onRemoveTag', () => {
      store.dispatch = jest.fn()
      const { queryByText } = renderWithRedux(<FavoriteList />, store)

      fireEvent.click(queryByText(/✕/g))
      expect(store.dispatch).toBeCalledWith(removeTag(1, 'wallet'))
    })
  })
})
