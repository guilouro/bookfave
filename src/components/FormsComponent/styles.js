import styled from 'styled-components'
import { CleanButton, colors } from '../../utils.styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

export const Menu = styled.div`
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`

export const Button = styled(CleanButton)`
  position: absolute;
  color: ${({ active }) => (active ? colors.primary : colors.secondary)};
  transition: 0.5s all;
  transform: translateX(${({ active }) => (active ? '80%' : '-100%')});
`

export const Fields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  button {
    background-color: ${colors.primary};
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;

    &:disabled {
      background-color: ${colors.secondary};
    }

    @media (min-width: 900px) {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`

export const Input = styled.input`
  border: 1px solid #e7e8eb;
  border-radius: 4px;
  padding: 8px 10px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${colors.secondary};
  }

  @media (min-width: 600px) {
    flex: 1;
    margin: 0;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`
