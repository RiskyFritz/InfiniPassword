import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Routes } from './routes';
import DarkModeContextProvider from './contexts/DarkModeContext';
import HistoryContext from './contexts/PasswordHistoryContext';

ReactDOM.render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<HistoryContext.Provider>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</HistoryContext.Provider>
		</DarkModeContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
