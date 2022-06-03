import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders a nav', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });
});
