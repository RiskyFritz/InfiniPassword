/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getItems } from './getItems';

export const renderItems = async (endpoint: string) => {
	const data = await getItems(endpoint);
	return data;
};
