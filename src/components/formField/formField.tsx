import React, { useState } from 'react';

import './formField.css';

const FormField = (title: string, typeIn: string) => {
	// useState returns type
	const [value, setValue] = useState('');
	const type = typeIn;

	return (
		<div>
			<label>{title}</label>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{type}
		</div>
	);
};
export default FormField;
