import { postCredentials } from './postPassword';

export const uploadFile = (file: Blob) => {
	// parse input file into JSON
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
		const csv = reader.result as string;
		const lines = csv.split('\n');
		lines.forEach((line) => {
			const credential = line.split(',');
			const [name, url, folder, username, password, notes] = credential;
			const newCredential = {
				name,
				url,
				folder,
				username,
				password,
				notes,
			};
			// add credential to database
			postCredentials(newCredential);
		});
		reader.onerror = function () {
			console.log(reader.error);
		};
	};
};
