import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../Interface';
import { incPos, setBoard } from '../../Redux/boardSlice';
import "./Key.css";

interface Iprops{
    letter: string
}
const Key: React.FC<Iprops> = (props) => {
    const{letter} = props;
    const board = useSelector((state:rootState)=>state.board.board);
    const position = useSelector((state:rootState)=> state.board.pos);
    const row = useSelector((state:rootState)=>state.board.row);
    const dispatch = useDispatch();
    let currentRow = Math.floor(position/5);
    const chooseLetter = () => {
        if(position >= 30) return; //block from goin out of the table
        if(currentRow > row) return; //block you from going out of the row
        const newBoard = [...board];
        newBoard[position] = letter; //add a letter
        dispatch(setBoard(newBoard));
        dispatch(incPos()); //inc to next pos
    }
  return (
    <div className="letter" onClick={chooseLetter}>
        {letter}
    </div>
  )
}

export default Key