const getItems = (endpoint: string) =>
	fetch(endpoint).then((response) => response.json());

export const downloadFile = (endpoint: string) => {
	let items = {};
	items = getItems(endpoint);
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.url},${item.username},${item.password}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};
