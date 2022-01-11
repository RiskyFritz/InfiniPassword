/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './index.css';
import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';
import { postCredentials } from '../utils/postCredential';
import { strengthScore } from '../utils/passwordStrength';
import { url } from 'inspector';

// interface PasswordFormInterface {
// 	url: string;
// 	name: string;
// 	folder: string;
// 	username: string;
// 	password: string;
// 	notes: string;
// }

const AddPassword = () => {
	const onSubmit = (data: any) => {
		const credentialToPost = {
			...data,
			strength: strengthScore(data.password),
			user: 'zdennis27',
		};
		postCredentials(credentialToPost);
	};

	const input: InputOptions[] = [
		{
			label: 'URL',
			name: 'url',
			type: 'text',
			placeholder: 'https://www.example.com',
		},
		{
			label: 'Name',
			name: 'name',
			type: 'text',
			placeholder: 'Password Name',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'Folder Name',
		},
		{
			label: 'Username',
			name: 'username',
			type: 'text',
			placeholder: 'Username',
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			placeholder: 'Password',
		},
		{
			label: 'Notes',
			name: 'notes',
			type: 'text',
			placeholder: 'Notes',
		},
	];

	return (
		<div>
			<FormCreator inputs={input} onSubmit={onSubmit} />
		</div>
	);
};
export default AddPassword;
