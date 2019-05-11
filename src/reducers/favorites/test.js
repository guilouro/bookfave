import reducer from '.'
import { ADD, REMOVE, REMOVE_TAG } from '../../actions/favorite'

const initialState = {
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
})
