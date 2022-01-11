export interface PasswordItem {
	id: string;
    user: string;
    username: string;
    password: string;
	name: string;
	folder: string;
	url: string;
	notes: string;
    strength: number;
    lastUpdatedOn: Date;
    groups: string[];
}

export interface GroupItem {
	id: string;
    user: string;
    groupName: string;
    trustedAccounts: string[];
    passwords: string[];
}

export interface FolderItem {
    id: string;
    user: string;
    folder: string;
}

export interface BankItem {
    id: string;
    user: string;
    name: string;
    folder: string;
    bankName: string;
    accountType: string;
    routingNumber: string;
    accountNumber: string;
    bankWebsite: string;
    bankPhone: string;
    notes: string;
}

export interface AddressItem {
    id: string;
    user: string;
    name: string;
    folder: string;
    title: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    notes: string;
}

export interface PaymentMethodItem {
    id: string;
    user: string;
    name: string;
    folder: string;
    nameOnCard: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    type: string;
    notes: string;
}

export interface SecureNoteItem {
    id: string;
    user: string;
    name: string;
    folder: string;
    notes: string;
}

export interface TrustedAccountItem {
    id: string;
    user: string;
    trustedAccount: string;
    groups: string[];
}