import React from 'react'
import * as S from './styles'
import FormHandler from '../../containers/FormHandler'
import FavoriteList from '../../containers/FavoriteList'

// mock
const data = [
  {
    id: '1',
    title: 'Crédito',
    link: 'www.bebluecredito.com.br',
    tags: ['crédito']
  },
  {
    id: '2',
    title: 'Wallet',
    link: 'www.beblue.com.br/wallet',
    tags: ['wallet']
  },
  {
    id: '3',
    title: 'Credenciamento',
    link: 'www.beblue.com.br/credenciamento',
    tags: ['wallet']
  },
  {
    id: '4',
    title: 'Seu dinheiro de volta',
    link: 'www.beblue.com.br',
    tags: ['beblue', 'cashback', 'saldo']
  }
]

const Main = () => (
  <S.Main>
    <S.Header>
      BOOKFAVE
      <S.Description>- Challenge</S.Description>
    </S.Header>
    <S.Box>
      <FormHandler />
      <S.Content>
        <FavoriteList />
      </S.Content>
    </S.Box>
  </S.Main>
)

export default Main
