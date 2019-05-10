import React from 'react'
import Tag from '.'
import { render } from 'react-testing-library'

describe('Tag', () => {
  it('Should render correctly', () => {
    const { container } = render(<Tag name="wallet" onClose={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })
})
