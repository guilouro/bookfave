import React from 'react'
import * as S from './styles'
import FavoriteItem from '../favorite-item'
import FormHandler from '../../containers/form-handle'

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
  <main>
    <header>BOOKFAVE - Challenge</header>
    <S.Box>
      <FormHandler />
      {data.map(item => (
        <FavoriteItem
          key={item.id}
          title={item.title}
          link={item.link}
          tags={item.tags}
          onRemove={Function}
        />
      ))}
    </S.Box>
  </main>
)

export default Main
