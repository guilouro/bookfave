import React from 'react'
import EmptyList from '.'
import { render } from 'react-testing-library'

describe('EmptyList', () => {
  it('Should render correctly', () => {
    const { container } = render(<EmptyList />)
    expect(container).toMatchSnapshot()
  })
})
