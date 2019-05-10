import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Icon from '../icons'

const Form = () => {
  const [currentType, setType] = useState('new')
  const handleClick = type => {
    setType(type)
  }
  return (
    <S.Container>
      <S.Menu>
        <S.Button active={currentType === 'new'}>
          <Icon name="Plus" onClick={() => handleClick('new')} />
        </S.Button>
        <S.Button active={currentType === 'search'}>
          <Icon name="Search" onClick={() => handleClick('search')} />
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

Form.propTypes = {}

Form.defaultProps = {}

export default Form
