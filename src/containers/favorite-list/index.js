import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FavoriteItem from '../../components/favorite-item'
import { searchIdByTag } from '../../reducers/favorites'
import { removeFavorite, removeTag, filterByTag } from '../../actions/favorites'

const FavoriteList = ({ favorites, onRemoveItem, onRemoveTag, onFilterTag }) =>
  favorites.map(item => (
    <FavoriteItem
      key={item.id}
      title={item.title}
      link={item.link}
      tags={Object.keys(item.tags)}
      onFilterTag={tagName => onFilterTag(tagName)}
      onRemoveTag={tagName => onRemoveTag(item.id, tagName)}
      onRemove={() => onRemoveItem(item.id)}
    />
  ))

FavoriteList.propTypes = {
  favorites: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onFilterTag: PropTypes.func
}

const mapStateToProps = state => {
  const { filterTag, entities, ids } = state.favorites
  const currentIds = filterTag ? searchIdByTag(state.favorites, filterTag) : ids
  const favorites = currentIds.map(id => entities[id])
  return { favorites }
}

export default connect(
  mapStateToProps,
  {
    onRemoveItem: removeFavorite,
    onRemoveTag: removeTag,
    onFilterTag: filterByTag
  }
)(FavoriteList)
