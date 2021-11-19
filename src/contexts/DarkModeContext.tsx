import React, { createContext, useEffect, useState, useContext } from 'react';

interface DarkModeContextValues {
	toggleDarkMode: () => void;
}

// > create context
const DarkModeContext = createContext<DarkModeContextValues>(
	{} as DarkModeContextValues,
);

// > create hook
export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeContextProvider: React.FC = ({ children }) => {
	// --- hooks ---
	// > state
	const [isDarkMode, setIsDarkMode] = useState(false);
	let isDarkModeLocal = localStorage.getItem('isDarkMode');

	// --- lifecycle ---
	// > dark mode side effect
	useEffect(() => {
		// check if dark mode is active
		if (isDarkModeLocal === 'true' || isDarkMode) {
			// set dark mode
			document.body.classList.add('dark');
			localStorage.setItem('isDarkMode', 'true');
		} else {
			// remove dark mode
			document.body.classList.remove('dark');
			localStorage.setItem('isDarkMode', 'false');
		}
	}, [isDarkMode]);

	// --- functions ---
	// > toggle dark mode
	const toggleDarkMode = () => {
		// toggle dark mode
		setIsDarkMode(!isDarkMode);
		isDarkModeLocal = localStorage.getItem('isDarkMode');
        console.log('Toggled dark mode')
	};

	// > dark mode context values
	const value: DarkModeContextValues = {
		toggleDarkMode,
	};

	return (
		<DarkModeContext.Provider value={value}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
