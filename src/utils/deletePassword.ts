export const deleteCredentials = (id: string) => {
	const endpoint = `http://localhost:3000/password/${id}`;
	// Write delete request here
	return fetch(endpoint, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
};
