import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Routes } from './routes';
import DarkModeContextProvider from './contexts/DarkModeContext';

ReactDOM.render(
	<StrictMode>
		<DarkModeContextProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</DarkModeContextProvider>
	</StrictMode>,
	document.getElementById('root'),
);
