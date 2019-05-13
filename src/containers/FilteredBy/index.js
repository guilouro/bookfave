import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../../components/Tag'
import { connect } from 'react-redux'
import { filterByTag } from '../../actions/favorites'

const FilteredBy = ({ tagName, clearFilter }) =>
  !!tagName && (
    <p>
      Filtered by: <Tag name={tagName} onClose={clearFilter} />
    </p>
  )

FilteredBy.propTypes = {
  clearFilter: PropTypes.func.isRequired,
  tagName: PropTypes.string
}

FilteredBy.defaultProps = {
  tagName: ''
}

const mapStateToProps = ({ favorites }) => ({
  tagName: favorites.filterTag
})

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(filterByTag(''))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredBy)
