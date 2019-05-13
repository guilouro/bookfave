import React from 'react'
import EmptyList from '.'
import { render } from 'react-testing-library'

describe('EmptyList', () => {
  it('Should render correctly', () => {
    const { container, queryByText } = render(<EmptyList />)
    expect(queryByText(/We don't have any favorite/g)).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
