import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  })
  it('renders logo and navigation links', () => {
    const logo = screen.getByAltText("My Icon");
    expect(logo).toBeInTheDocument();
  });
  
});
