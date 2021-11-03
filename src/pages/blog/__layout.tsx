import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __layout: React.FC = ({ children }) => (
	<div>
		<nav>blog nav</nav>
		{children}
		<footer>blog foot</footer>
	</div>
);
export default __layout;
