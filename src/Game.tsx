import React, { useCallback } from 'react';
import './styles/game.css';
import { useState } from 'react';
import { Status } from './components/Status';
import { Board } from './components/Board';
import { Moves } from './components/Moves';

export type TSquare = 'X' | 'O' | null;
export type TSquares = TSquare[];
export type TxIsNext = boolean;
type THistory = TSquares[];

export interface I_INITIAL_STATE {
	history: THistory;
	currentMove: number;
}

const INITIAL_STATE: I_INITIAL_STATE = {
	history: [Array(9).fill(null)],
	currentMove: 0,
};

function Game() {
	const [history, setHistory] = useState<I_INITIAL_STATE['history']>(INITIAL_STATE.history);

	const [currentMove, setCurrentMove] = useState<I_INITIAL_STATE['currentMove']>(INITIAL_STATE.currentMove);

	const xIsNext: TxIsNext = currentMove % 2 === 0;
	const currentSquares: TSquares = history[currentMove];

  const handlePlay = useCallback((nextSquares: TSquares) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}, [history, currentMove]);

	const jumpToMove = useCallback((nextMove: I_INITIAL_STATE['currentMove']) => {
		setCurrentMove(nextMove);
	}, []);

	return (
		<>
			<Status squares={currentSquares} xIsNext={xIsNext} />

			<div className='game'>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

        <Moves history={history} jumpToMove={jumpToMove}/>
			</div>
			<br />
		</>
	);
}

export default Game;
