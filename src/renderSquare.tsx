import React from 'react'
import Square from './Square'

type squareProps = string|null
type BoardProps = {
  squares: squareProps[]

}

export default function renderSquare(prop: BoardProps, i:number){
    return (
      <Square
        value={prop.squares[i]}
        ind ={i}
      />
      
    );
  }