import { createContext, useContext } from 'react';

// Create interface for context data that will be passed down to children
interface HistoryContextValues {
	passwordHistory: string[];
	setPasswordHistory: (passwordHistory: string[]) => void;
}

const HistoryContext = createContext<HistoryContextValues>(
	{} as HistoryContextValues,
);

export const useHistory = () => useContext(HistoryContext);

// create context provider that will add and remove passwords from the password history
export default HistoryContext;
