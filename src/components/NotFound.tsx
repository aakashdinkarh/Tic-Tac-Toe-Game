import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

export const NotFound = () => {
	return (
		<div className='container'>
			<h1>404</h1>
			<p>Oops! Looks like you're lost.</p>
			<p>The page you are looking for does not exist.</p>
			<br />
			<Link to='/'>Go back to Home</Link>
		</div>
	);
};
