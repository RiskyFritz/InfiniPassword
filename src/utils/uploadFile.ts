import { postCredentials } from './postCredential';

export const uploadFile = (file: Blob, credentialItem: string[], type: string) => {
	// parse input file into JSON
	const reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
		const csv = reader.result as string;
		const lines = csv.split('\n');
		lines.forEach((line) => {
			const credential = line.split(',');
			const credentialItem = credential;
			const newCredential = {
				credentialItem
			};
			// add credential to database
			postCredentials(newCredential, type);
		});
		reader.onerror = function () {
			console.log(reader.error);
		};
	};
};
