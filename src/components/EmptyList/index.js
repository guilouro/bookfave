import React from 'react'
import * as S from './styles'
import Icon from '../Icons'

const EmptyList = () => (
  <S.Container>
    <Icon name="Empty" size="50px" />
    <p>We haven't any favorite yet</p>
  </S.Container>
)

export default EmptyList
