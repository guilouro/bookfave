import React from 'react'
import Tag from '.'
import { render, fireEvent } from 'react-testing-library'

describe('Tag', () => {
  it('Should render correctly', () => {
    const { container, queryByText } = render(
      <Tag name="wallet" onClose={jest.fn()} />
    )

    expect(queryByText(/wallet/g)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('Should call onClose when clicked', () => {
    const onClose = jest.fn()
    const { container } = render(<Tag name="wallet" onClose={onClose} />)

    fireEvent.click(container.querySelector('button'))
    expect(onClose).toBeCalled()
  })
})
