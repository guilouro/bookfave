import React from 'react'
import EmptyList from '.'
import { render } from 'react-testing-library'

describe('EmptyList', () => {
  it('Should render correctly', () => {
    const { container, queryByText } = render(<EmptyList />)
    expect(queryByText(/We haven't any favorite yet/g)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
