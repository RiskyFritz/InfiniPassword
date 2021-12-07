import { FieldValues, useForm } from 'react-hook-form';
import { strengthScore } from '../../utils/passwordStrength';
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

const getStrength = (password: string): number => {
	let strength = 0;
	strength = strengthScore(password);
	return strength;
};

const FormCreator = ({ inputs, onSubmit, classNames }: FormCreatorProps) => {
	// useState returns type
	const { register, handleSubmit } = useForm();

	return (
		<form
			className={`form-gen-form ${classNames?.form ?? ''}`}
			onSubmit={handleSubmit(onSubmit)}
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
					{/* {input.type === 'password' && (
						<>
							<div className="meter-container">
								<div
									className="meter"
									style={{
										width: `${strength}%`,
										backgroundColor: `${strengthColor}`,
										visibility: 'visible',
									}}
								/>
							</div>
						</>
					)} */}
				</label>
			))}
			<FormFooter
				onClick={() => {
					// console.log(data);
					// // try posting to the database
					// postCredentials(data);
				}}
			/>
		</form>
	);
};
export default FormCreator;
