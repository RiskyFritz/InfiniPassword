// create async function that returns an array of items
export const getItems = async (
	endpoint: string,
): Promise<
	[
		{
			id: string;
			name: string;
			folder: string;
			url: string;
			username: string;
			password: string;
			notes: string;
		},
	]
> => {
	const response = fetch(endpoint);
	const data = (await response).json() as Promise<
		[
			{
				id: string;
				name: string;
				folder: string;
				url: string;
				username: string;
				password: string;
				notes: string;
			},
		]
	>;
	return data;
};
