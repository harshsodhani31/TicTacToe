import React,{useContext} from 'react'
import {handleContext} from './Game'
type SquareProps = {
    value: string | null 
    ind: number
}

export default  function Square(props: SquareProps) {
    const {handleClick} = useContext(handleContext);
    return (
        <button className="square" onClick={()=>handleClick(props.ind)}>
          {props.value}
        </button>
      );
}