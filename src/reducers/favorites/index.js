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
      const { id } = action.payload
      const { [id]: key, ...restEntities } = state.entities
      return {
        ...state,
        entities: restEntities,
        ids: state.ids.filter(stateId => stateId !== id)
      }
    }

    case REMOVE_TAG: {
      const { favoriteId, tagName } = action.payload
      const { tags } = state.entities[favoriteId]
      const { [tagName]: key, ...restTags } = tags

      return {
        ...state,
        entities: {
          ...state.entities,
          [favoriteId]: {
            ...state.entities[favoriteId],
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
