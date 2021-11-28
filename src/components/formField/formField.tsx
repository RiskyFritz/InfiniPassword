import React from 'react';
import { useState } from 'react-router-dom';

import './FormField.css';

const FormField = (title: string, typeIn: string) => {
	// useState returns type
	const [value, setValue] = useState('');
	return (
		<div>
			<label>{title}</label>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};
export default FormField;
