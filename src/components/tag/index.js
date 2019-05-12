import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Tag = ({ name, onClick, onClose }) => (
  <S.Container>
    <span onClick={onClick}>{name}</span>
    <S.Close onClick={onClose}>&#10005;</S.Close>
  </S.Container>
)

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func
}

Tag.defaultProps = {
  onClick: () => {}
}

export default Tag
