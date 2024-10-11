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
	const reversedHistory = history.slice().reverse();

	return (
		<ul className='moves'>
			{reversedHistory.map((_, move) => {
				const moveNumber = history.length - 1 - move;
				return (
					<li key={move}>
						<button className='move-btn' onClick={() => jumpToMove(moveNumber)}>
							{getDescription(moveNumber)}
						</button>
					</li>
				);
			})}
		</ul>
	);
};
