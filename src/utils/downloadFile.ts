import axios from 'axios';
import { AddressItem, BankItem, PasswordItem, PaymentMethodItem, SecureNoteItem } from './interfaces';

export const downloadPasswords = async (endpoint: string) => {
	const { data } = await axios.get<PasswordItem[]>(endpoint);
	const items = data;
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.folder},${item.url},${item.username},${item.password},${item.strength},${item.lastUpdatedOn},${item.notes}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};

export const downloadAddresses = async (endpoint: string) => {
	const { data } = await axios.get<AddressItem[]>(endpoint);
	const items = data;
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.folder},${item.title},${item.firstName},${item.lastName},${item.address},${item.address2},${item.city},${item.state},${item.zip},${item.country},${item.phone}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};

export const downloadBanks = async (endpoint: string) => {
	const { data } = await axios.get<BankItem[]>(endpoint);
	const items = data;
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.folder},${item.accountType},${item.bankName},${item.routingNumber},${item.accountNumber},${item.bankPhone},${item.bankWebsite}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};

export const downloadPaymentMethods = async (endpoint: string) => {
	const { data } = await axios.get<PaymentMethodItem[]>(endpoint);
	const items = data;
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.folder},${item.type},${item.nameOnCard},${item.cardNumber},${item.expirationDate},${item.cvv}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};

export const downloadSecureNotes = async (endpoint: string) => {
	const { data } = await axios.get<SecureNoteItem[]>(endpoint);
	const items = data;
	let csvContent = 'data:text/csv;charset=utf-8,';
	items.forEach((item) => {
		csvContent += `${item.name},${item.folder},${item.notes}\n`;
	});
	const encodedUri = encodeURI(csvContent);
	const link = document.createElement('a');
	link.setAttribute('href', encodedUri);
	link.setAttribute('download', 'data.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
};
