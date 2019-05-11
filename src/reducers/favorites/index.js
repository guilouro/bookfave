import { ADD, REMOVE, REMOVE_TAG } from '../../actions/favorite'

const initialState = {
  entities: {},
  ids: []
}

const favorites = (state = initialState, action) => {
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

    default:
      return state
  }
}

export default favorites
