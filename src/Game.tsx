import React, { useState } from 'react'
import Board from './Board'
import calculateWinner from './calculateWinner'
type squareProps= string|null
type objectProps ={
  squares: squareProps[] 
}
type createContextProps ={
   handleClick: (i: number)=> void
 
}

export const handleContext = React.createContext<createContextProps>({handleClick: (i:number)=>{}});
function Game() {
    const [history,setHistory] = useState<objectProps[]>([{squares: Array(9).fill(null)}] )
    const [stepNumber,setStepNumber] = useState(0)
    const [xIsNext,setXIsNext] = useState(true)
    const handleClick = (i:number) => {
        const History = history.slice(0, stepNumber + 1)
        const current = History[History.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory(History.concat([{squares: squares}]))
        setStepNumber(History.length)
        setXIsNext(!xIsNext)
        
      }
      function jumpTo(step:number){
          setStepNumber(step)
          setXIsNext(step%2===0)
      }
    
    const moves =  history.map((step,move)=>{
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
            return (
                <li key={move}>
                    <button data-testid={`btn-${move}`} onClick={() => jumpTo(move)}>{desc}</button>
                </li>
                );
    });

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

  return (
    <div className="game">
        <div className="game-board">
          
          <handleContext.Provider value={{handleClick}}>
          <Board
            squares={current.squares}
          />
          </handleContext.Provider>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
  )
  }
export default Game