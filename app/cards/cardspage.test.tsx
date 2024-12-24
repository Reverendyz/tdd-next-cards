import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsPage from '@/app/cards/page';

describe('CardsPage', () => {
  test('renders no cards initially', () => {
    const { asFragment } = render(<CardsPage />);
    
    expect(asFragment()).toMatchSnapshot();
    
    const cards = screen.queryAllByRole('heading', { level: 2 });
    expect(cards.length).toBe(0);
  });

  test('adds a new card via form submission and matches snapshot', () => {
    const { asFragment } = render(<CardsPage />);
    
    const titleInput = screen.getByPlaceholderText(/title/i) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(/description/i) as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add card/i });
    
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } });
    fireEvent.click(addButton);

    // Snapshot after adding a card
    expect(asFragment()).toMatchSnapshot();
    
    const cards = screen.getAllByRole('heading', { level: 2 });
    expect(cards.length).toBe(1);
    expect(cards[0]).toHaveTextContent('New Title');
  });

  test('does not add a card if form is incomplete', () => {
    render(<CardsPage />);
    
    const titleInput = screen.getByPlaceholderText(/title/i) as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add card/i });
    
    fireEvent.change(titleInput, { target: { value: 'Only Title' } });
    fireEvent.click(addButton);
    
    const cards = screen.queryAllByRole('heading', { level: 2 });
    expect(cards.length).toBe(0);
  });

  test('form clears after successful submission', () => {
    render(<CardsPage />);
    
    const titleInput = screen.getByPlaceholderText(/title/i) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(/description/i) as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add card/i });
    
    fireEvent.change(titleInput, { target: { value: 'Another Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Another Description' } });
    fireEvent.click(addButton);
    
    expect(titleInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
  });
});
