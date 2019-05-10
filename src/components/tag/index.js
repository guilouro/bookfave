import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Tag = ({ name, onClose }) => (
  <S.Container>
    {name}
    <S.Close onClick={onClose}>&#10005;</S.Close>
  </S.Container>
)

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Tag
