import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { Form, withContextForm, Submit } from 'formcat'
import * as S from './styles'
import Icon from '../Icons'

const InputField = withContextForm(props => <S.Input {...props} />)

const Forms = ({ onAdd, onSearch }) => {
  const [currentType, setType] = useState('new')

  const form = useRef(null)

  const doSearch = debounce(e => {
    onSearch(e.target.value)
  }, 250)

  const handleSearch = e => {
    e.persist()
    doSearch(e)
  }

  const handleSubmit = data => {
    onAdd(data)
    form.current.updateFieldValue('title', '')
    form.current.updateFieldValue('link', '')
    form.current.updateFieldValue('tags', '')
  }

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
        <Form ref={form} keyUpValidation onSubmit={handleSubmit}>
          <S.Fields>
            <InputField name="title" placeholder="Title" required />
            <InputField name="link" placeholder="Link" required />
            <InputField name="tags" placeholder="Tags" />
            <Submit>Add</Submit>
          </S.Fields>
        </Form>
      )}

      {currentType === 'search' && (
        <Form>
          <S.Fields>
            <InputField
              name="tagName"
              placeholder="Search"
              onChange={handleSearch}
            />
          </S.Fields>
        </Form>
      )}
    </S.Container>
  )
}

Forms.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Forms
