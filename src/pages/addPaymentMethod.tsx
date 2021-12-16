import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormCreator, {
	InputOptions,
} from '../components/FormCreator/FormCreator';

const AddPaymentMethod = () => {
	// ---- set strength meter ----
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
			label: 'Start Date',
			name: 'startDate',
			type: 'date',
			placeholder: '01/01/2021',
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
