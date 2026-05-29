import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Tooltwo from './Components/Tool2/Tooltwo';
import { addDoc, collection } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => ({})),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({})),
  collection: jest.fn(() => ({})),
  addDoc: jest.fn(() => Promise.resolve({ id: 'message-1' })),
}));

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() => Promise.resolve({ status: 200 })),
}));

beforeEach(() => {
  jest.clearAllMocks();
  collection.mockReturnValue({ path: 'messages' });
  addDoc.mockResolvedValue({ id: 'message-1' });
  emailjs.send.mockResolvedValue({ status: 200 });
  window.history.pushState({}, '', '/');
});

test('renders the home page hero', () => {
  render(<App />);
  const linkElement = screen.getByText(/discover the best devops tools/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the tools route', () => {
  window.history.pushState({}, '', '/tool');

  render(<App />);

  expect(screen.getByText(/deeper tools/i)).toBeInTheDocument();
});

test('renders the contact route and sends a message', async () => {
  window.history.pushState({}, '', '/contact');

  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
    target: { value: 'Abolaji Samuel' },
  });
  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
    target: { value: 'abolaji@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/message/i), {
    target: { value: 'Please contact me.' },
  });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => {
    expect(addDoc).toHaveBeenCalledWith(expect.any(Object), {
      name: 'Abolaji Samuel',
      email: 'abolaji@example.com',
      message: 'Please contact me.',
    });
  });
  expect(emailjs.send).toHaveBeenCalledWith(
    'service_16ak0qi',
    'template_6kb865e',
    {
      name: 'Abolaji Samuel',
      email: 'abolaji@example.com',
      message: 'Please contact me.',
    },
    'RgtRRDYA9srQ_lplx'
  );
});

test('renders the secondary tools component', () => {
  const { container } = render(<Tooltwo />);

  expect(container.firstChild).toBeInTheDocument();
});
