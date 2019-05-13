import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Forms from '../../components/Forms'
import { addFavorite, filterByTag } from '../../actions/favorites'

const FormHandler = ({ onAddFavorite, onFilterByTag, filterTag }) => {
  const handleAdd = ({ data }) => {
    onAddFavorite({
      title: data.title,
      link: data.link,
      tags: data.tags
    })
  }

  const handleSearch = tagName => {
    onFilterByTag(tagName.toLowerCase())
  }

  return (
    <Forms onAdd={handleAdd} onSearch={handleSearch} filterTag={filterTag} />
  )
}

FormHandler.propTypes = {
  onAddFavorite: PropTypes.func.isRequired,
  onFilterByTag: PropTypes.func.isRequired,
  filterTag: PropTypes.string
}

FormHandler.defaultProps = {
  filterTag: ''
}

const mapStateToProps = ({ favorites }) => ({
  filterBy: favorites.filterTag
})

export default connect(
  mapStateToProps,
  {
    onAddFavorite: addFavorite,
    onFilterByTag: filterByTag
  }
)(FormHandler)
