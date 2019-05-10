import { render } from 'react-testing-library'
import Form from './'

describe('<Form />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Form />)
    expect(container).toMatchSnapshot()
  })
})
