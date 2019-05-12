import { ADD, REMOVE, REMOVE_TAG, FILTER } from '../../actions/favorites'

const initialState = {
  filterTag: '',
  entities: {},
  ids: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        },
        ids: [action.payload.id, ...state.ids]
      }

    case REMOVE: {
      const { [action.payload.id]: key, ...restEntities } = state.entities
      return {
        ...state,
        entities: restEntities,
        ids: state.ids.filter(id => id !== action.payload.id)
      }
    }

    case REMOVE_TAG: {
      // TODO: Need refactor
      const { [action.payload.tagName]: key, ...restTags } = state.entities[
        action.payload.favoriteId
      ].tags

      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.favoriteId]: {
            ...state.entities[action.payload.favoriteId],
            tags: restTags
          }
        }
      }
    }

    case FILTER:
      return {
        ...state,
        filterTag: action.payload.tagName
      }

    default:
      return state
  }
}

export const searchIdByTag = (favorites, tagName) => {
  const items = Object.values(favorites.entities).filter(
    item => !!item.tags[tagName]
  )
  return items.map(({ id }) => id)
}
