import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page hero', () => {
  render(<App />);
  const linkElement = screen.getByText(/discover the best devops tools/i);
  expect(linkElement).toBeInTheDocument();
});
