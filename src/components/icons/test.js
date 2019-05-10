import React from 'react'
import { render } from 'react-testing-library'
import Icon from '.'
import * as AllIcons from './elements'

describe('<Icon />', () => {
  Object.keys(AllIcons).forEach(CurrentIcon => {
    it(`Should render <${CurrentIcon} /> correctly`, () => {
      const { container } = render(<Icon name={CurrentIcon} />)
      expect(container).toMatchSnapshot()
    })
  })
})
