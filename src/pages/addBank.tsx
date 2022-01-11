import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';
import { postCredentials } from '../utils/postCredential';

const AddBank = () => {
	const onSubmit = (data: any) => {
		const credentialToPost = {
			...data,
			user: 'zdennis27',
		};
		postCredentials(credentialToPost, 'bank');
	};

	const input: InputOptions[] = [
		{
			label: 'Name',
			name: 'name',
			type: 'text',
			placeholder: 'Fidelity',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'Investments',
		},
		{
			label: 'Bank Name',
			name: 'bankName',
			type: 'text',
			placeholder: 'Fidelity Bank',
		},
		{
			label: 'Account Type',
			name: 'accountType',
			type: 'number',
			placeholder: 'Savings',
		},
		{
			label: 'Routing Number',
			name: 'routingNumber',
			type: 'number',
			placeholder: 'Routing Number',
		},
		{
			label: 'Account Number',
			name: 'type',
			type: 'text',
			placeholder: 'Account Number',
		},
		{
			label: 'Bank Phone',
			name: 'bankPhone',
			type: 'text',
			placeholder: '123-456-7890',
		},
		{
			label: 'Bank Website',
			name: 'bankWebsite',
			type: 'text',
			placeholder: 'www.fidelity.com',
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
export default AddBank;
