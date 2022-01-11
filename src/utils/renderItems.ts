/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getAddresses, getBanks, getPasswords, getPaymentMethods, getSecureNotes } from './getItems';

export const renderPasswords = async (endpoint: string) => {
	try {
		const data = await getPasswords(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};

export const renderAddresses = async (endpoint: string) => {
	try {
		const data = await getAddresses(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};

export const renderBanks = async (endpoint: string) => {
	try {
		const data = await getBanks(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};

export const renderPaymentMethods = async (endpoint: string) => {
	try {
		const data = await getPaymentMethods(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};

export const renderSecureNotes = async (endpoint: string) => {
	try {
		const data = await getSecureNotes(endpoint);
		console.log('something went right');
		return data;
	} catch (error) {
		console.log('something went wrong');
		console.error(error);
		return [];
	}
};
