import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const __layout: React.FC<Props> = ({ children }) => {
	return (
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
};
export default __layout;
