import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;

  @media (min-width: 900px) {
    width: 900px;
  }
`

export const Header = styled.header`
  padding: 20px 0;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`

export const Description = styled.span`
  color: #b0b9bf; /* TODO: Define global color */
`

export const Box = styled.section`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
`

export const Content = styled.div`
  margin-top: 20px;
  height: 100%;

  @media (min-width: 900px) {
    height: 400px;
    overflow-y: overlay;
  }
`
