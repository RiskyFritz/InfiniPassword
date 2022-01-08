/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FieldValues, useForm } from 'react-hook-form';
import FormFooter from '../FormFooter/FormFooter';

import './FormCreator.css';

export interface InputOptions {
	label: string;
	type: string;
	name: string;
	placeholder: string;
	onClick?: () => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormCreatorProps {
	inputs: InputOptions[];
	onSubmit: (values: FieldValues) => void;
	classNames?: {
		form?: string;
		input?: string;
		label?: string;
		submit?: string;
	};
}

const FormCreator = ({ inputs, onSubmit, classNames }: FormCreatorProps) => {
	// useState returns type
	const { register, handleSubmit } = useForm();

	return (
		<form
			className={`form-gen-form ${classNames?.form ?? ''}`}
			onSubmit={() => {
				handleSubmit(onSubmit);
				// set all inputs to empty
				
			}}
		>
			{inputs.map((input) => (
				<label
					key={input.name}
					className={`form-gen-label ${classNames?.label ?? ''}`}
				>
					{' '}
					{input?.label ?? ''}
					<input
						key={input.name}
						className={`form-gen-input ${classNames?.input ?? ''}`}
						type={input?.type ?? 'text'}
						placeholder={input?.placeholder ?? ''}
						{...register(input?.name)}
						onClick={input?.onClick}
						onChange={input?.onChange}
					/>
				</label>
			))}
			<FormFooter
				onClick={() => {
					// // try posting to the database
					// postCredentials(data);
				}}
			/>
		</form>
	);
};
export default FormCreator;
