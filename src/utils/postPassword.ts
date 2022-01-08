import axios from 'axios';

export const postCredentials = (data: {
	user: string;
	username: string;
	password: string;
	name: string;
	strength?: number;
	folder?: string;
	url?: string;
	notes?: string;
	sharedWith?: string;
}) => {
	const endpoint = 'http://localhost:3000/credentials';
	console.log(data);

	axios.post(endpoint, data).then((res) => {
		console.log(res);
	});

	// fetch(endpoint, {
	// 	method: 'post',
	// 	headers: {
	// 		Accept: 'application/json, text/plain, */*',
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({
	// 		url: data.url,
	// 		name: data.name,
	// 		folder: data.folder,
	// 		username: data.username,
	// 		password: data.password,
	// 		notes: data.notes,
	// 		// strength: data.strength,
	// 		// date: data.date,
	// 	}),
	// })
	// 	.then((res) => {
	// 		res.json();
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};
