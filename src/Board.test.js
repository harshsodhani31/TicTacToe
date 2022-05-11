import Board from './Board';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Board', () => {
    test('Board',  () => {
        render(<Board squares={['O','X','O','X','O',null,'X',null,'O','O']} />)
        screen.debug();
    });
  });