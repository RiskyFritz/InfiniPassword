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

export const getItems = async (
	endpoint: string,
): Promise<CredentialsItem[]> => {
	const response = fetch(endpoint);
	const data = (await response).json() as Promise<CredentialsItem[]>;
	return data;
};
