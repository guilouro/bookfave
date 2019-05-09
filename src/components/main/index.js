import React from 'react'
import * as S from './styles'

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
      <div className="form">Add items</div>
      <div className="list">
        {data.map(item => (
          <S.Item>
            <S.ItemContent>
              <S.Title>{item.title}</S.Title>
              <S.Link href={item.link} target="_blank">
                {item.link}
              </S.Link>
              <div>
                {item.tags.map(tag => (
                  <S.Tag>
                    {tag} <S.CloseTag>&#10005;</S.CloseTag>
                  </S.Tag>
                ))}
              </div>
            </S.ItemContent>
            <div className="actions">
              <button>Delete</button>
            </div>
          </S.Item>
        ))}
      </div>
    </S.Box>
  </main>
)

export default Main
