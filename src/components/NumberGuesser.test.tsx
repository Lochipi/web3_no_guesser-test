import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from "vitest";  
import NumberGuesser from "./NumberGuesser";

test("renders the game title", () => {
  render(<NumberGuesser />);
  const titleElement = screen.getByText(/Number Guesser Game/i);
  expect(titleElement).toBeInTheDocument();
});

test('allows user to input guess', () => {
  render(<NumberGuesser />);
  const inputElement = screen.getByPlaceholderText(/Enter your guess/i);
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: '50' } });
  expect(inputElement).toHaveValue(50);
});

test('provides feedback for a guess', () => {
  render(<NumberGuesser />);
  const inputElement = screen.getByPlaceholderText(/Enter your guess/i);
  const guessButton = screen.getByRole('button', { name: /Guess/i });

  fireEvent.change(inputElement, { target: { value: '50' } });
  fireEvent.click(guessButton);

  const feedbackElement = screen.queryByText(/Too high/i) || screen.queryByText(/Too low/i) || screen.queryByText(/Congratulations/i);
  expect(feedbackElement).toBeInTheDocument();
});

test('resets the game', () => {
  render(<NumberGuesser />);
  const resetButton = screen.getByRole('button', { name: /Reset Game/i });
  fireEvent.click(resetButton);

  const inputElement = screen.getByPlaceholderText(/Enter your guess/i) as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();  
  expect(inputElement.value).toBe('');  
});
