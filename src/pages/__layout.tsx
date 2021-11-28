import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'

// eslint-disable-next-line @typescript-eslint/naming-convention
const __layout: React.FC = ({ children }) => {
	// ---- hooks ----
	// > state
	const [count, setCount] = useState(0);
	// > router
	const history = useHistory();

	// ---- lifecycle ----
	// onMount
	useEffect(() => {
		if (location.pathname === '/index.html') {
			history.push('/');
		}
	},[])

	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			{children}
			<footer style={{ display: 'flex',  }}>
				copyright © {new Date().getFullYear()}
			</footer>
		</div>
	);
};
export default __layout;
