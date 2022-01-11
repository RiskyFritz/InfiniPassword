import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';
import { postCredentials } from '../utils/postCredential';

const AddAddress = () => {
	const onSubmit = (data: any) => {
		const credentialToPost = {
			...data,
			user: 'zdennis27',
		};
		postCredentials(credentialToPost, 'address');
	};

	const input: InputOptions[] = [
		{
			label: 'Name',
			name: 'name',
			type: 'text',
			placeholder: 'Home',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'Addresses',
		},
		{
			label: 'Title',
			name: 'title',
			type: 'text',
			placeholder: 'Mr.',
		},
		{
			label: 'First Name',
			name: 'firstName',
			type: 'text',
			placeholder: 'John',
		},
		{
			label: 'Last Name',
			name: 'lastName',
			type: 'text',
			placeholder: 'Smith',
		},
		{
			label: 'Company',
			name: 'company',
			type: 'text',
			placeholder: 'Passkey',
		},
		{
			label: 'Address',
			name: 'address',
			type: 'text',
			placeholder: '123 Main St',
		},
		{
			label: 'Address 2',
			name: 'address2',
			type: 'text',
			placeholder: 'Apt. 2',
		},
		{
			label: 'City',
			name: 'city',
			type: 'text',
			placeholder: 'Seattle',
		},
		{
			label: 'State',
			name: 'state',
			type: 'text',
			placeholder: 'WA',
		},
		{
			label: 'Zip Code',
			name: 'zip',
			type: 'text',
			placeholder: '98141',
		},
		{
			label: 'Country',
			name: 'country',
			type: 'text',
			placeholder: 'US',
		},
		{
			label: 'Notes',
			name: 'notes',
			type: 'textarea',
			placeholder: 'Write notes here...',
		},
	];

	return (
		<div>
			<FormCreator inputs={input} onSubmit={onSubmit} />
		</div>
	);
};
export default AddAddress;

