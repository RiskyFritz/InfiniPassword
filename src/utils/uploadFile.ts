const addCredential = (
	credential: Credential,
	method: string,
	endpoint: string,
) => {
	try {
		fetch(endpoint, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credential),
		});
	} catch (error) {
		console.log(error);
	}
};

export const uploadFile = (file: Blob, endpoint: string, method: string) => {
	// parse input file into JSON
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
		const csv = reader.result as string;
		const lines = csv.split('\n');
		lines.forEach((line) => {
			const credential = line.split(',');
			const { name, url, folder, username, password, notes } = credential;
			const newCredential = {
				name,
				url,
				folder,
				username,
				password,
				notes,
			};
			// add credential to database
			addCredential(newCredential, endpoint, method);
		});
		reader.onerror = function () {
			console.log(reader.error);
		};
	};
};
