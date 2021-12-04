import axios from 'axios';

export const deleteCredentials = (id: string) => {
	const endpoint = `http://localhost:3000/password/${id}`;
	// Write delete request here
	return axios.delete(endpoint);

	// delete itemcard from state
};
