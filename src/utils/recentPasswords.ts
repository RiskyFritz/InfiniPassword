import axios from 'axios';

// create async function that returns an array of items
export interface CredentialsItem {
	id: string;
	username: string;
	password: string;
	name: string;
	folder: string;
	url: string;
	strength: number;
	notes: string;
	createdOn: Date;
	lastUsedOn: Date;
	lastUpdatedOn: Date;
	sharedWith: string;
}

export const getRecentPasswords = async (
	endpoint: string,
): Promise<CredentialsItem[]> => {
	const { data } = await axios.get<CredentialsItem[]>(endpoint, {
		params: 'zdennis27',
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	return data;
};
