/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getItems } from './getItems';

export const renderItems = async (endpoint: string) => {
	try {
		const data = await getItems(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};
