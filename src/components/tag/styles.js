import styled from 'styled-components'

export const Container = styled.span`
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
  cursor: pointer;
`

// TODO: Creacte global
const CleanButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const Close = styled(CleanButton)`
  margin-left: 10px;
  color: #fff;
`
