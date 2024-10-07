import React from 'react';
import { useMemo } from 'react';
import { calculateWinner } from '../utils/calculateWinner';
import { TSquares, TxIsNext } from '../Game';

interface IStatus {
	squares: TSquares;
	xIsNext: TxIsNext;
}

export const Status = ({ squares, xIsNext }: IStatus) => {
	const winner = useMemo(() => {
		return calculateWinner({ squares });
	}, [squares]);

	if (winner) {
		return (
			<p className='status'>
				<span style={{ color: 'green' }}>{winner} won the game!</span>
			</p>
		);
	}

	let isFull = true;
	squares.forEach((value: any) => {
		if (value === null) isFull = false;
	});

	if (isFull) {
		return (
			<p className='status'>
				<span style={{ color: 'red' }}>Game Draw, Please restart the game</span>
			</p>
		);
	}

	return <p className='status'>Next turn : {(xIsNext ? "X" : "O")}</p>
};
