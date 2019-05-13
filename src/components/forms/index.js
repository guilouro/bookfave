import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, withContextForm, Submit } from 'formcat'
import * as S from './styles'
import Icon from '../Icons'

const InputField = withContextForm(props => <S.Input {...props} />)

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
        <Form onSubmit={onAdd}>
          <S.Fields>
            <InputField name="title" placeholder="Title" required />
            <InputField name="link" placeholder="Link" required />
            <InputField name="tags" placeholder="Tags" />
            <Submit>Add</Submit>
          </S.Fields>
        </Form>
      )}

      {currentType === 'search' && (
        <Form onSubmit={onSearch}>
          <S.Fields>
            <InputField name="tagName" placeholder="Search" />
            <Submit>Search</Submit>
          </S.Fields>
        </Form>
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
