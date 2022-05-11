import React from 'react'
import renderSquare from  './renderSquare'

type squareProps = string|null
type BoardProps = {
  squares: squareProps[]

}
export default function Board(props:BoardProps) {
    
        return (
          <div>
            <div className="board-row">
              {renderSquare(props,0)}
              {renderSquare(props,1)}
              {renderSquare(props,2)}
            </div>
            <div className="board-row">
              {renderSquare(props,3)}
              {renderSquare(props,4)}
              {renderSquare(props,5)}
            </div>
            <div className="board-row">
              {renderSquare(props,6)}
              {renderSquare(props,7)}
              {renderSquare(props,8)}
            </div>
          </div>
        );
}
