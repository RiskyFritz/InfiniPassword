import React from "react";

interface Props {}

const __layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<nav>blog nav</nav>
			{children}
			<footer>blog foot</footer>
		</div>
	);
};
export default __layout;
