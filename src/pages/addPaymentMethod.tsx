import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';
import { postCredentials } from '../utils/postCredential';

const AddPaymentMethod = () => {
	const onSubmit = (data: any) => {
		const credentialToPost = {
			...data,
			user: 'zdennis27',
		};
		postCredentials(credentialToPost, 'paymentMethod');
	};

	const input: InputOptions[] = [
		{
			label: 'Name',
			name: 'name',
			type: 'text',
			placeholder: 'Facebook',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'Social Media',
		},
		{
			label: 'Name on Card',
			name: 'nameOnCard',
			type: 'text',
			placeholder: 'John Smith',
		},
		{
			label: 'Number',
			name: 'number',
			type: 'number',
			placeholder: '1234 1234 1234 1234',
		},
		{
			label: 'Security Code',
			name: 'securityCode',
			type: 'number',
			placeholder: '123',
		},
		{
			label: 'Type',
			name: 'type',
			type: 'text',
			placeholder: 'Credit Card',
		},
		{
			label: 'Expiration Date',
			name: 'expirationDate',
			type: 'date',
			placeholder: '01/01/2024',
		},
		{
			label: 'Notes',
			name: 'notes',
			type: 'textarea',
			placeholder: 'notes...',
		},
	];

	return (
		<div>
			<FormCreator inputs={input} onSubmit={onSubmit} />
		</div>
	);
};
export default AddPaymentMethod;
