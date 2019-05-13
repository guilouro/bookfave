import React from 'react'
import FavoriteItem from '.'
import { render, fireEvent, cleanup } from 'react-testing-library'

const props = {
  id: '1',
  title: 'Crédito',
  link: 'www.bebluecredito.com.br',
  tags: ['crédito'],
  onRemove: jest.fn(),
  onRemoveTag: jest.fn(),
  onFilterTag: jest.fn()
}

describe('<FavoriteItem />', () => {
  afterEach(cleanup)

  it('Should render correctly', () => {
    const { container, queryByText } = render(<FavoriteItem {...props} />)

    expect(queryByText(props.title)).toBeTruthy()
    expect(queryByText(props.link)).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should call onRemove', () => {
    const onRemove = jest.fn()
    const { getByText } = render(
      <FavoriteItem {...props} onRemove={onRemove} />
    )

    fireEvent.click(getByText(/Delete/g))
    expect(onRemove).toBeCalled()
  })

  it('Should call onRemoveTag', () => {
    const onRemoveTag = jest.fn()
    const { getByText } = render(
      <FavoriteItem {...props} onRemoveTag={onRemoveTag} />
    )

    fireEvent.click(getByText(/✕/g))
    expect(onRemoveTag).toBeCalledWith(props.tags[0])
  })

  it('Should call onFilterTag', () => {
    const onFilterTag = jest.fn()
    const { getByText } = render(
      <FavoriteItem {...props} onFilterTag={onFilterTag} />
    )

    fireEvent.click(getByText(props.tags[0]))
    expect(onFilterTag).toBeCalledWith(props.tags[0])
  })

  it('Should resolve link without http', () => {
    const { container } = render(
      <FavoriteItem {...props} link="www.google.com" />
    )
    expect(container.querySelector('a').getAttribute('href')).toBe(
      '//www.google.com'
    )
  })

  it('Should resolve link without http and www', () => {
    const { container } = render(<FavoriteItem {...props} link="google.com" />)
    expect(container.querySelector('a').getAttribute('href')).toBe(
      '//google.com'
    )
  })

  it('Should resolve link http', () => {
    const { container } = render(
      <FavoriteItem {...props} link="http://google.com" />
    )
    expect(container.querySelector('a').getAttribute('href')).toBe(
      'http://google.com'
    )
  })
})
