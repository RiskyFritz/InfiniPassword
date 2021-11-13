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

	// --- lifecycle ---
	// > dark mode side effect
	useEffect(() => {
		// check if dark mode is active
		if (isDarkMode) {
			// set dark mode
			document.body.classList.add('dark');
			// chrome.storage.sync.set({ isDarkMode: true });
		} else {
			// remove dark mode
			document.body.classList.remove('dark');
			// chrome.storage.sync.set({ isDarkMode: false });
		}
	}, [isDarkMode]);

	// --- functions ---
	// > toggle dark mode
	const toggleDarkMode = () => {
		// toggle dark mode
		setIsDarkMode(!isDarkMode);
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
