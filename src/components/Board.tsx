import React from 'react';
import { Square } from './Square';
import { calculateWinner } from '../utils/calculateWinner';
import { TSquares, TxIsNext } from '../Game';

const RENDER_BOARD = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

interface IBoard {
    xIsNext: TxIsNext;
    squares: TSquares;
    onPlay: (nextSquares: TSquares) => void;
}

export const Board = ({ xIsNext, squares, onPlay }: IBoard) => {
    function handleClick(i: number) {
      if (calculateWinner({squares}) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    return (
    <div className='board'>
        {RENDER_BOARD.map((boardRow, rowIndex) => (
            <div key={rowIndex} className='board-row'>
                {boardRow.map((squareId) => (
                    <Square value={squares[squareId]} handleClick={() => handleClick(squareId)} key={squareId} />
                ))}
            </div>
        ))}
    </div>
    );
  }