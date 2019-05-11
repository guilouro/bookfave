import {
  ADD,
  REMOVE,
  REMOVE_TAG,
  addFavorite,
  removeFavorite,
  removeTag
} from '.'

jest.mock('uuid/v4', () => jest.fn(() => 1))

describe('Actions - Favorite', () => {
  it('Should create an action to add new favorite', () => {
    const payload = {
      title: 'Lorem ipsum',
      link: 'www.lorenipsum.com.br',
      tags: 'wallet credito'
    }

    const expected = {
      type: ADD,
      payload: {
        ...payload,
        id: 1,
        tags: {
          wallet: true,
          credito: true
        }
      }
    }

    expect(addFavorite(payload)).toEqual(expected)
  })

  it('Should create an action to remove favorite', () => {
    const payload = { id: 1 }

    const expected = {
      type: REMOVE,
      payload
    }

    expect(removeFavorite(1)).toEqual(expected)
  })

  it('Should create an action to remove tag', () => {
    const payload = { favoriteId: 1, tagName: 'wallet' }

    const expected = {
      type: REMOVE_TAG,
      payload
    }

    expect(removeTag(1, 'wallet')).toEqual(expected)
  })
})
