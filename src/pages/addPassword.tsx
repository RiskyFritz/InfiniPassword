import { useState } from 'react';
import './index.css';
import { useForm } from 'react-hook-form';
import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';

const AddPassword = () => {
	// ---- set strength meter ----
	const [strengthColor, setStrengthColor] = useState('#fff');
	const [strength, setStrength] = useState(0);
	const [data, setData] = useState({
		url: '',
		name: '',
		folder: '',
		username: '',
		password: '',
		notes: '',
		// strength: 0,
		// date: new Date(),
	});
	const clearForm = () => {
		setData({
			url: '',
			name: '',
			folder: '',
			username: '',
			password: '',
			notes: '',
			// strength: 0,
			// date: new Date(),
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (res: any) => console.log(res);
	console.log(errors);

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
			placeholder: 'My Website',
		},
		{
			label: 'Folder',
			name: 'folder',
			type: 'text',
			placeholder: 'My Website',
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
