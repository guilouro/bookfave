import uuid from 'uuid/v4'

export const ADD = '@favorite/ADD'
export const REMOVE = '@favorite/REMOVE'
export const REMOVE_TAG = '@tag/REMOVE'
export const FILTER = '@tag/FILTER'

const parseTags = tags => {
  const obj = {}
  tags.split(' ').forEach(tag => {
    obj[tag.toLowerCase()] = true
  })

  return obj
}

export const addFavorite = ({ title, link, tags }) => ({
  type: ADD,
  payload: {
    id: uuid(),
    title,
    link,
    tags: parseTags(tags)
  }
})

export const removeFavorite = id => ({
  type: REMOVE,
  payload: { id }
})

// TODO: Maybe to create a Tags actions
export const removeTag = (favoriteId, tagName) => ({
  type: REMOVE_TAG,
  payload: { favoriteId, tagName }
})

export const filterByTag = tagName => ({
  type: FILTER,
  payload: { tagName }
})
