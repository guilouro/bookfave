import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Tag from '../tag'
import Icon from '../icons'

const formatLink = link => {
  const isValid = /^(http|\/\/)/i.test(link)
  return isValid ? link : `//${link}`
}

const FavoriteItem = ({ title, link, tags, onRemove }) => (
  <S.Container>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Link href={formatLink(link)} target="_blank">
        {link}
      </S.Link>

      <S.Tags>
        {tags.map(tag => (
          <Tag key={tag} name={tag} onClose={Function} />
        ))}
      </S.Tags>
    </S.Info>
    <S.Delete onClick={onRemove}>
      <Icon name="Trash" size="16px" />
      <span>Delete</span>
    </S.Delete>
  </S.Container>
)

FavoriteItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array
}

FavoriteItem.defaultProps = {
  tags: []
}

export default FavoriteItem
