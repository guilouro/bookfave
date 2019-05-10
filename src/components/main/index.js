import React from 'react'
import * as S from './styles'
import Icon from '../icons'
import Form from '../form'
import Tag from '../tag'
import FavoriteItem from '../favorite-item'

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
      <Form />
      <div className="list">
        {data.map(item => (
          <FavoriteItem
            key={item.id}
            title={item.title}
            link={item.link}
            tags={item.tags}
            onRemove={Function}
          />
        ))}
      </div>
    </S.Box>
  </main>
)

export default Main
