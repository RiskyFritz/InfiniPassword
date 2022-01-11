// create async function that returns an array of items

import { AddressItem, BankItem, PasswordItem, PaymentMethodItem, SecureNoteItem } from "./interfaces";
import axios from "axios";

export const getPasswords = async (
	endpoint: string,
): Promise<PasswordItem[]> => {
	const { data } = await axios.get(endpoint);
	return data;
};

export const getAddresses = async (
	endpoint: string,
): Promise<AddressItem[]> => {
	const { data } = await axios.get(endpoint);
	return data;
};

export const getBanks = async (
	endpoint: string,
): Promise<BankItem[]> => {
	const { data } = await axios.get(endpoint);
	return data;
};

export const getPaymentMethods = async (
	endpoint: string,
): Promise<PaymentMethodItem[]> => {
	const { data } = await axios.get(endpoint);
	return data;
};

export const getSecureNotes = async (
	endpoint: string,
): Promise<SecureNoteItem[]> => {
	const { data } = await axios.get(endpoint);
	return data;
};
