import React, { useState } from 'react';

const Generate = () => {
	// ---- hooks ----
	const [generatedPassword, setGeneratedPassword] = useState('');

	// ---- functions ----
	const generatePassword = () => {
		setGeneratedPassword(`${generatedPassword}!`);
	};

	return (
		<div>
			<button type="button" onClick={generatePassword}>
				Generate Password
			</button>
		</div>
	);
};

export default Generate;
