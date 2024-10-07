import React from 'react';
import { TSquare } from '../Game';

interface ISquare {
	value: TSquare;
	handleClick: () => void;
}

export const Square = ({ value, handleClick }: ISquare) => {
	const color = value === 'X' ? 'blue' : 'red';
	return (
		<button style={{ color }} className='square' onClick={handleClick}>
			{value}
		</button>
	);
};
