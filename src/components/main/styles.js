import styled from 'styled-components'

export const Box = styled.section`
  padding: 20px;
  background: #fff;
  width: 900px;
  border-radius: 10px;
`

export const Form = styled.div`
  /* width: 100%; */
  display: flex;
  .buttons {
    width: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
  }

  .fields {
    width: 100%;
    display: flex;
  }

  input {
    flex: 1;
    border: 1px solid #e7e8eb;
    border-radius: 4px;
    padding: 8px 10px;
    &:not(:last-child) {
      margin-right: 15px;
    }

    ::placeholder {
      color: #b0b9bf;
    }
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #e7e8eb;
  }
`

export const ItemContent = styled.div``

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

export const Tag = styled.span`
  min-width: 70px;
  display: inline-flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 3px 5px;
  border-radius: 2px;
  margin-right: 10px;
  font-size: 10px;
  background-color: #1e68c1; /* TODO: Define global color */
  color: #fff;
`

const CleanButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const CloseTag = styled(CleanButton)`
  margin-left: 10px;
  color: #fff;
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
