import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Tag from '../Tag'
import Icon from '../Icons'

const formatLink = link => {
  const isValid = /^(http|\/\/)/i.test(link)
  return isValid ? link : `//${link}`
}

const FavoriteItem = ({
  title,
  link,
  tags,
  onRemove,
  onFilterTag,
  onRemoveTag
}) => (
  <S.Container>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Link href={formatLink(link)} target="_blank">
        {link}
      </S.Link>

      <S.Tags>
        {tags.map(tag => (
          <Tag
            key={tag}
            name={tag}
            onClick={() => onFilterTag(tag)}
            onClose={() => onRemoveTag(tag)}
          />
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
  onFilterTag: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array
}

FavoriteItem.defaultProps = {
  tags: []
}

export default FavoriteItem
