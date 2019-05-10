import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #e7e8eb;
  }
`

export const Info = styled.div``
export const Tags = styled.div``

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
`

export const Link = styled.a`
  font-size: 12px;
  color: #04a0ff;
  text-decoration: none;
  margin: 10px 0;
  display: table;
`

// TODO: Criar global
const CleanButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const Delete = styled(CleanButton)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #b0b9bf; /* TODO: Define global color */
  span {
    margin-left: 5px;
  }
`
