import { render, screen, cleanup } from '@testing-library/react';
import { expect, test, describe, afterEach } from 'bun:test';
import { ContactForm } from './ContactForm';

describe('ContactForm Component', () => {
    const mockLabels = {
        name: 'NameLabel',
        email: 'EmailLabel',
        organization: 'OrgLabel',
        message: 'MessageLabel',
        submit: 'SubmitLabel',
        hint: 'HintLabel'
    };
    const mockMailTo = 'test@example.com';

    afterEach(() => {
        cleanup();
    });

    test('renders the form with correct action and method', () => {
        render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

        const form = document.querySelector('form');
        expect(form).not.toBeNull();
        expect(form?.getAttribute('action')).toBe(`mailto:${mockMailTo}`);
        expect(form?.getAttribute('method')).toBe('post');
        expect(form?.getAttribute('encType')).toBe('text/plain');
    });

    test('renders all labels and inputs correctly', () => {
        render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

        // Check name input
        const nameInput = screen.getByPlaceholderText('NameLabel');
        expect(nameInput).not.toBeNull();
        expect(nameInput.getAttribute('type')).toBe('text');
        expect(nameInput.hasAttribute('required')).toBe(true);
        expect(screen.getByText('NameLabel')).not.toBeNull();

        // Check email input
        const emailInput = screen.getByPlaceholderText('EmailLabel');
        expect(emailInput).not.toBeNull();
        expect(emailInput.getAttribute('type')).toBe('email');
        expect(emailInput.hasAttribute('required')).toBe(true);
        expect(screen.getByText('EmailLabel')).not.toBeNull();

        // Check organization input
        const orgInput = screen.getByPlaceholderText('OrgLabel');
        expect(orgInput).not.toBeNull();
        expect(orgInput.getAttribute('type')).toBe('text');
        expect(orgInput.hasAttribute('required')).toBe(false);
        expect(screen.getByText('OrgLabel')).not.toBeNull();

        // Check message textarea
        const messageInput = screen.getByPlaceholderText('MessageLabel');
        expect(messageInput).not.toBeNull();
        expect(messageInput.tagName.toLowerCase()).toBe('textarea');
        expect(messageInput.getAttribute('rows')).toBe('5');
        expect(screen.getByText('MessageLabel')).not.toBeNull();
    });

    test('renders hint and submit button', () => {
        render(<ContactForm labels={mockLabels} mailTo={mockMailTo} />);

        expect(screen.getByText('HintLabel')).not.toBeNull();

        const submitBtn = screen.getByText('SubmitLabel');
        expect(submitBtn).not.toBeNull();
        expect(submitBtn.getAttribute('type')).toBe('submit');
    });
});
