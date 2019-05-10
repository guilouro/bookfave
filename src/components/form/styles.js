import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Menu = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`

// TODO: Set global
const CleanButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const Button = styled(CleanButton)`
  color: ${({ active }) => (active ? '#1e68c1' : '#b0b9bf')};
`

export const Fields = styled.div`
  width: 100%;
  display: flex;
`

export const Input = styled.input`
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
`
