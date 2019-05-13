import styled from 'styled-components'
import { CleanButton, colors } from '../../utils.styles'

export const Container = styled.span`
  min-width: 70px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 3px 5px;
  border-radius: 2px;
  margin-right: 10px;
  font-size: 10px;
  background-color: ${colors.primary};
  color: #fff;
  cursor: pointer;
`

export const Close = styled(CleanButton)`
  margin-left: 10px;
  color: #fff;
`
