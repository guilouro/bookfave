import uuid from 'uuid/v4'

const ADD = '@favorite/ADD'
const REMOVE = '@favorite/REMOVE'
const REMOVE_TAG = '@tag/REMOVE'

const parseTags = tags => {
  const obj = {}
  tags.split('').forEach(tag => {
    obj[tag] = true
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
export const removeTag = tagName => ({
  type: REMOVE_TAG,
  payload: { tagName }
})
