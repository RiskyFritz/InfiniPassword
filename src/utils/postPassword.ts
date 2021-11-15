export const postCredentials = (
	url: string,
	name: string,
	folder: string,
	username: string,
	password: string,
	notes: string,
	strength: number,
	date: Date,
) => {
	const endpoint = 'http://localhost:3000/password';

	fetch(endpoint, {
		method: 'post',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			url,
			name,
			folder,
			username,
			password,
			notes,
			strength,
			date,
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
