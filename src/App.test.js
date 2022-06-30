import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('on load, there should be a snake in the fight section', () => {
  render(<App />);
  
  const snakeAtLoad = screen.getByText(/🐍/i);

  expect(snakeAtLoad).toBeInTheDocument();
});

test('if the zoo is closed, buttons are disabled', () => {
  render(<App />);

  const closeZoo = screen.getByText(/Close for the night/i);
  const deerInDOM = screen.getAllByText(/🦌/i);

  fireEvent.click(closeZoo);
  const animal = screen.getByText(/Add a deer/i);

  fireEvent.click(animal);
  fireEvent.click(animal);
  fireEvent.click(animal);
  fireEvent.click(animal);

  expect(deerInDOM.length).toBe(1);
});

test('button should add animal to the page', () => {
  render(<App />);
  const stampedeOnLoad = screen.getAllByText(/🦌|🐑|🦒|🐒/i);
  const button = screen.getByText(/Add a deer/i);

  expect(stampedeOnLoad.length).toBe(4);

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  const stampedeOnClicks = screen.getAllByText(/🦌|🐑|🦒|🐒/i);

  expect(stampedeOnClicks.length).toBe(8);
});
