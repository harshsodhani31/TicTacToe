import App from './App.tsx'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
describe('App', () => {
    test('renders App component', async () => {
      render(<App />);
      const clickEvent = screen.getByTestId("btn 0");
      fireEvent.click(clickEvent);
      const clickEvent1 = screen.getByTestId("btn 1");
      fireEvent.click(clickEvent1);
      const clickEvent2 = screen.getByTestId("btn-0");
      fireEvent.click(clickEvent2);
      fireEvent.click(clickEvent);
      screen.debug();
    });
  });