import { test, expect, describe, afterEach } from 'bun:test';
import { render, screen, cleanup } from '@testing-library/react';
import { ContactForm } from './ContactForm';

const mockLabels = {
  name: 'Full Name',
  email: 'Email Address',
  organization: 'Company/Org',
  message: 'Your Message',
  submit: 'Send Message',
  hint: 'Required fields *'
};

const mockMailTo = 'test@example.com';

describe('ContactForm', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders all form inputs with correct labels and placeholders', () => {
    render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

    // Check for presence of labels
    expect(screen.getByText(mockLabels.name)).toBeTruthy();
    expect(screen.getByText(mockLabels.email)).toBeTruthy();
    expect(screen.getByText(mockLabels.organization)).toBeTruthy();
    expect(screen.getByText(mockLabels.message)).toBeTruthy();

    // Check for inputs with correct placeholders
    expect(screen.getByPlaceholderText(mockLabels.name)).toBeTruthy();
    expect(screen.getByPlaceholderText(mockLabels.email)).toBeTruthy();
    expect(screen.getByPlaceholderText(mockLabels.organization)).toBeTruthy();
    expect(screen.getByPlaceholderText(mockLabels.message)).toBeTruthy();
  });

  test('renders form hint and submit button', () => {
    render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

    expect(screen.getByText(mockLabels.hint)).toBeTruthy();
    const submitButton = screen.getByRole('button', { name: mockLabels.submit });
    expect(submitButton).toBeTruthy();
    expect(submitButton.getAttribute('type')).toBe('submit');
  });

  test('sets required attribute on necessary fields', () => {
    render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

    const nameInput = screen.getByPlaceholderText(mockLabels.name);
    const emailInput = screen.getByPlaceholderText(mockLabels.email);
    const orgInput = screen.getByPlaceholderText(mockLabels.organization);
    const messageInput = screen.getByPlaceholderText(mockLabels.message);

    expect(nameInput.hasAttribute('required')).toBe(true);
    expect(emailInput.hasAttribute('required')).toBe(true);
    expect(orgInput.hasAttribute('required')).toBe(false); // Organization is not required in the component
    expect(messageInput.hasAttribute('required')).toBe(false); // Message is not required in the component
  });

  test('sets correct form action based on mailTo prop', () => {
    const { container } = render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);
    const form = container.querySelector('form');

    expect(form).toBeTruthy();
    expect(form?.getAttribute('action')).toBe(`mailto:${mockMailTo}`);
    expect(form?.getAttribute('method')).toBe('post');
    expect(form?.getAttribute('encType')).toBe('text/plain');
  });
});
