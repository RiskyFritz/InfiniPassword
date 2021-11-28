export const postCredentials = (data: {
	url: string;
	name: string;
	folder: string;
	username: string;
	password: string;
	notes: string;
	// strength: number;
	// date: Date;
}) => {
	const endpoint = 'http://localhost:3000/password';
	console.log(data);

	fetch(endpoint, {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			url: data.url,
			name: data.name,
			folder: data.folder,
			username: data.username,
			password: data.password,
			notes: data.notes,
			// strength: data.strength,
			// date: data.date,
		}),
	})
		.then((res) => {
			res.json();
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};
