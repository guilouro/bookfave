import styled from 'styled-components'
import { CleanButton, colors } from '../../utils.styles'

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
  color: ${colors.link};
  text-decoration: none;
  margin: 10px 0;
  display: table;
`

export const Delete = styled(CleanButton)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${colors.secondary};
  span {
    margin-left: 5px;
  }
`
