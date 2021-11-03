import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const __layout: React.FC<Props> = ({ children }) => {
	// ---- hooks ----
	// > state
	const [count, setCount] = useState(0);

	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/posts">Posts</Link>
			</nav>
			{children}
			<footer style={{ display: "flex" }}>
				<button onClick={() => setCount(count - 1)}>-</button>
				<p>{count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
			</footer>
		</div>
	);
};
export default __layout;
