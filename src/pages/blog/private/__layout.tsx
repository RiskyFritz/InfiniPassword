import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __layout: React.FC = ({ children }) => (
	<div>
		<nav>
			<h1>Private blog nav</h1>
			<Link to="/">Home</Link>
			<Link to="/blog">Blog</Link>
		</nav>
		{children}
		<footer>Private blog foot</footer>
	</div>
);
export default __layout;
