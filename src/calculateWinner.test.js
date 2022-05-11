import calculateWinner from './calculateWinner'
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('calculateWinner', () => {
    test('calculate winner for different board patterns',  () => {
        const board = [ ['O','X','O','X','O',null,'X',null,'O','O'],
                        ['O','X','O','X','O','X','O',null,null,'O'],
                        ['O','X',null,null,'X','O','O','X',null,'X'],
                        ['O','X',null,'O','X',null,'O',null,null,'O'],
                        ['O',null,'X',null,'O','X','O',null,'X','X']
                      ]
        board.map(square => {
            const inputSquare = square.slice(0,10)
            expect(calculateWinner(inputSquare)).toBe(square[square.length-1])
        })
    });
  });