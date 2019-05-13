import React from 'react'
import * as S from './styles'
import Icon from '../Icons'

const EmptyList = () => (
  <S.Container>
    <Icon name="Empty" size="50px" />
    <p>We don't have any favorite</p>
  </S.Container>
)

export default EmptyList
