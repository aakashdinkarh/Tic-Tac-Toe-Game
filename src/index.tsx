import React from 'react';
import Game from './Game';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<Game />);
