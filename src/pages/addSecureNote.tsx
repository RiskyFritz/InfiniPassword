import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';
import { postCredentials } from '../utils/postCredential';

const AddSecureNote = () => {
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
export default AddSecureNote;
