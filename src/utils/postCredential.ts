import axios from 'axios';

export const postCredentials = (data: {}, type: string) => {
	const endpoint = `http://localhost:3000/${type}`;
	console.log(data);

	axios.post(endpoint, data).then((res) => {
		console.log(res);
	});
};
