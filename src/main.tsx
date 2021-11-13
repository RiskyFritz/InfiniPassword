import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Routes } from './routes';
import DarkModeContextProvider from './contexts/DarkModeContext';

ReactDOM.render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</DarkModeContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
