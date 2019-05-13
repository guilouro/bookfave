import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Forms from '.'

const props = {
  onAdd: jest.fn(),
  onSearch: jest.fn()
}

describe('<Forms />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Forms {...props} />)

    expect(container.querySelectorAll('svg')).toHaveLength(2)
    expect(container.querySelectorAll('input')).toHaveLength(3)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should change menu to Search when clicked', () => {
    const { container, queryByPlaceholderText } = render(<Forms {...props} />)

    fireEvent.click(container.querySelectorAll('button')[0])
    expect(queryByPlaceholderText(/Search/g)).toBeTruthy()
  })

  it('Should change menu to New when clicked', () => {
    const { container, queryByPlaceholderText } = render(<Forms {...props} />)

    fireEvent.click(container.querySelectorAll('button')[0])
    expect(queryByPlaceholderText(/Search/g)).toBeTruthy()

    fireEvent.click(container.querySelectorAll('button')[1])
    expect(queryByPlaceholderText(/Search/g)).toBeNull()
    expect(queryByPlaceholderText(/Title/g)).toBeTruthy()
    expect(queryByPlaceholderText(/Link/g)).toBeTruthy()
    expect(queryByPlaceholderText(/Tags/g)).toBeTruthy()
  })
})
