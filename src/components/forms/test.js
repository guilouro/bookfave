import React from 'react'
import { render } from 'react-testing-library'
import Forms from '.'

describe('<Forms />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Forms />)
    expect(container).toMatchSnapshot()
  })
})
