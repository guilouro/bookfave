import React from 'react'
import * as S from './styles'
import FormHandler from '../../containers/FormHandler'
import FavoriteList from '../../containers/FavoriteList'
import FilteredBy from '../../containers/FilteredBy'
import logo from '../../../images/logo.png'

const Main = () => (
  <S.Main>
    <S.Header>
      <img src={logo} alt="BOOKFAVE" />
      <S.Description>Challenge</S.Description>
    </S.Header>
    <S.Box>
      <FormHandler />
      <FilteredBy />
      <S.Content>
        <FavoriteList />
      </S.Content>
    </S.Box>
  </S.Main>
)

export default Main
