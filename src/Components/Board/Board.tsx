import React from 'react'
import KeyBoard from '../Keyboard/KeyBoard';
import Square from '../Square/Square';
import './Board.css'
interface Iprops {
    board: string[]
}
export const Board: React.FC<Iprops> = (props) => {
        const {board} = props;
  return (
    <>
    <div className="board">
        {board.map((square, idx) =>{
            return (
                <>
                <Square val={square} squareIdx={idx}/>
                </>
            )
        })}
    </div>
    <div className="keyboard">
        <KeyBoard/>
    </div>
    </>
  )
}
