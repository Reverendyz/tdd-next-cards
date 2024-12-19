import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Main page tests', () => {
  beforeAll(() =>{
    render(<Page/>)
  })
  
  it('renders two divs within the nav element', () => {
    const main = screen.getByRole("main-text")
    expect(main).toBeInTheDocument()
  })

})

test('renders Page and saves snapshot', () => {
  const { asFragment } = render(<Page />);
  expect(asFragment()).toMatchSnapshot();
});