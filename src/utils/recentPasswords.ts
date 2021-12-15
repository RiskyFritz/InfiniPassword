import axios from 'axios';

// create async function that returns an array of items
export interface CredentialsItem {
	id: string;
	name: string;
	folder: string;
	url: string;
	username: string;
	password: string;
	notes: string;
}

export const getRecentPasswords = async (
	endpoint: string,
): Promise<CredentialsItem[]> => {
	const response = await axios.get(endpoint);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	return response.data as CredentialsItem[];
};
