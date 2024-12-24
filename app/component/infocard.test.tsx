import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import InfoCard from './InfoCard';

describe('InfoCard rendering', () => {
  it('renders with correct params', () => {
    const testTitle = 'sometitle';
    const testDescription = 'sometitle description';

    render(<InfoCard title={testTitle} description={testDescription} />);

    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(testDescription);
    expect(descriptionElement).toBeInTheDocument();
  })
})