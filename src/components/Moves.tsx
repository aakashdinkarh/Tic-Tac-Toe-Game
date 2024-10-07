import React from 'react';
import { I_INITIAL_STATE } from '../Game';

const getDescription = (moveNumber: number) => {
	if (moveNumber === 0) {
		return 'Go to game start';
	}
	return 'Go to move #' + moveNumber;
};

interface IMoves {
	history: I_INITIAL_STATE['history'];
	jumpToMove: (move: number) => void;
}

export const Moves = ({ history, jumpToMove }: IMoves) => {
	return (
		<ul className='moves'>
			{history.map((_, move) => {
				return (
					<li key={move}>
						<button onClick={() => jumpToMove(move)}>{getDescription(move)}</button>
					</li>
				);
			})}
		</ul>
	);
};
