import reducer, { searchIdByTag } from '.'
import { ADD, REMOVE, REMOVE_TAG, FILTER } from '../../actions/favorite'

const initialState = {
  filterTag: '',
  entities: {},
  ids: []
}

describe('Reducers - favorite', () => {
  it('Should return initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('Should handle ADD', () => {
    const expected = {
      filterTag: '',
      entities: {
        1: {
          id: 1,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { wallet: true, credit: true }
        }
      },
      ids: [1]
    }

    const state = reducer(initialState, {
      type: ADD,
      payload: {
        id: 1,
        title: 'Lorem Ipsum',
        link: 'www.loremipsum.com',
        tags: { wallet: true, credit: true }
      }
    })

    expect(state).toEqual(expected)
  })

  it('Should handle REMOVE', () => {
    const initial = {
      entities: {
        1: {
          id: 1,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { wallet: true, credit: true }
        },
        5: {
          id: 5,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { wallet: true, credit: true }
        }
      },
      ids: [1, 5]
    }

    const expected = {
      entities: {
        1: {
          id: 1,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { wallet: true, credit: true }
        }
      },
      ids: [1]
    }

    const state = reducer(initial, {
      type: REMOVE,
      payload: { id: 5 }
    })

    expect(state).toEqual(expected)
  })

  it('Should handle REMOVE_TAG', () => {
    const initial = {
      entities: {
        1: {
          id: 1,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { wallet: true, credit: true }
        }
      },
      ids: [1]
    }

    const expected = {
      entities: {
        1: {
          id: 1,
          title: 'Lorem Ipsum',
          link: 'www.loremipsum.com',
          tags: { credit: true }
        }
      },
      ids: [1]
    }

    const state = reducer(initial, {
      type: REMOVE_TAG,
      payload: { favoriteId: 1, tagName: 'wallet' }
    })

    expect(state).toEqual(expected)
  })

  it('Should handle FILTER', () => {
    const expected = {
      filterTag: 'wallet',
      entities: {},
      ids: []
    }

    const state = reducer(initialState, {
      type: FILTER,
      payload: { tagName: 'wallet' }
    })

    expect(state).toEqual(expected)
  })

  describe('Selectors', () => {
    it('Should returns ids that contains tag with selector', () => {
      const state = {
        entities: {
          1: {
            id: 1,
            title: 'Lorem Ipsum 1',
            link: 'www.loremipsum1.com',
            tags: { wallet: true, credit: true }
          },
          2: {
            id: 2,
            title: 'Lorem Ipsum 2',
            link: 'www.loremipsum2.com',
            tags: { credit: true }
          },
          5: {
            id: 5,
            title: 'Lorem Ipsum 3',
            link: 'www.loremipsum3.com',
            tags: { wallet: true }
          }
        },
        ids: [1]
      }

      const expected = [1, 5]
      const ids = searchIdByTag(state, 'wallet')
      expect(ids).toEqual(expected)
    })
  })
})
