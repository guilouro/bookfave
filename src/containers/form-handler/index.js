import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Forms from '../../components/forms'
import { addFavorite, filterByTag } from '../../actions/favorites'

const FormHandler = ({ onAddFavorite, onFilterByTag }) => {
  const handleAdd = ({ data }) => {
    console.log('add', data)
    onAddFavorite({
      title: data.title,
      link: data.link,
      tags: data.tags
    })
  }

  const handleSearch = ({ data }) => {
    console.log('serach', data)
    onFilterByTag(data.tagName.toLowerCase())
  }
  return <Forms onAdd={handleAdd} onSearch={handleSearch} />
}

FormHandler.propTypes = {
  onAddFavorite: PropTypes.func.isRequired,
  onFilterByTag: PropTypes.func.isRequired
}

export default connect(
  null,
  {
    onAddFavorite: addFavorite,
    onFilterByTag: filterByTag
  }
)(FormHandler)
