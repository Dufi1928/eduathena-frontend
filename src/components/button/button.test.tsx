import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

describe('Button Component', () => {
    test('renders with label', () => {
        // Renderise le composant Button avec une prop label
        render(<Button label="Click Me" />);
        // Recherche un élément button par son texte
        const buttonElement = screen.getByText(/click me/i);
        // Vérifie que le button est présent dans le document
        expect(buttonElement).toBeInTheDocument();
    });

    test('clicks button correctly', () => {
        // Mock (simulation) d'une fonction onClick
        const mockOnClick = jest.fn();
        // Renderise le composant Button avec une prop onClick
        render(<Button label="Click Me" onClick={mockOnClick} />);
        // Recherche le bouton et simule un clic
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        // Vérifie que la fonction mockOnClick a été appelée une fois
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
