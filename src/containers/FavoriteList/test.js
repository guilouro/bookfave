import React from 'react'
import { cleanup } from 'react-testing-library'
import FavoriteList from '.'
import { mockStore, renderWithRedux } from '../../../.test-config/redux-mock'

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
        filterTag: '',
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
  })
})
