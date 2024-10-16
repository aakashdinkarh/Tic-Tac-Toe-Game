import React from 'react';
import Game from './Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { NotFound } from './components/NotFound';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route path='/' element={<Game />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);
