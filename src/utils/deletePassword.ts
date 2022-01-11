import axios from 'axios';

export const deleteCredentials = (id: string, type: string) => {
	// This takes in the id and type of the credential to find the correct endpoint
	const endpoint = `http://localhost:3000/${type}/${id}`;
	// Write delete request here
	return axios.delete(endpoint);
};
