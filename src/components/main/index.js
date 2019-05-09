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
    <section>
      <div className="form">Add items</div>
      <div className="list">
        {data.map(item => (
          <div className="item">
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="link">{item.link}</div>
              {item.tags.map(tag => (
                <S.Tag>
                  {tag} <S.CloseTag>&#10005;</S.CloseTag>
                </S.Tag>
              ))}
            </div>
            <div className="actions">
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
)

export default Main
