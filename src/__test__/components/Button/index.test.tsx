import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../../components/Button';
import userEvent from '@testing-library/user-event';

describe('Test button successfully', () => {
    it('should render button', () => {
        const buttonTest = 'sigin';

        render(<Button label={buttonTest} />);

        const button = screen.getByRole('button', { name: buttonTest});
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(buttonTest);
    });

    it('should call onclick function', () => {
        const buttonTest = 'sigin';
        const onClick = jest.fn();
        debugger
        render(<Button label={buttonTest} onClick={onClick} />);

        const button = screen.getByRole('button', { name: buttonTest});

        userEvent.click(button);
        
        expect(onclick).toHaveBeenCalledTimes(1);

    });
});