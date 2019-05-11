import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Icon from '../icons'

const Forms = ({ onAdd, onSearch }) => {
  const [currentType, setType] = useState('new')
  const handleClick = type => {
    setType(type)
  }
  return (
    <S.Container>
      <S.Menu>
        <S.Button
          active={currentType === 'search'}
          onClick={() => handleClick('search')}
        >
          <Icon name="Search" />
        </S.Button>
        <S.Button
          active={currentType === 'new'}
          onClick={() => handleClick('new')}
        >
          <Icon name="Plus" />
        </S.Button>
      </S.Menu>

      {currentType === 'new' && (
        <S.Fields>
          <S.Input placeholder="Title" />
          <S.Input placeholder="Link" />
          <S.Input placeholder="Tags" />
        </S.Fields>
      )}

      {currentType === 'search' && (
        <S.Fields>
          <S.Input placeholder="Search" />
        </S.Fields>
      )}
    </S.Container>
  )
}

// TODO: remove ??
Forms.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Forms
