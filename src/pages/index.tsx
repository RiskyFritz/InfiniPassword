import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { useDarkMode } from '../contexts/DarkModeContext';

const Index = () => {
	// --- hooks ----
	// > dark mode
	const { toggleDarkMode } = useDarkMode();

	return (
		<div>
			<div className="search-container">
				<input
					id="search-input"
					className="search-input"
					type="text"
					placeholder="Search Your Passwords"
					spellCheck="false"
				/>
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fad"
					data-icon="search"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					style={{ width: '1rem' }}
					className="svg-inline--fa fa-search fa-w-16 fa-5x"
				>
					<g className="fa-group">
						<path
							fill="currentColor"
							d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
							className="fa-secondary"
						/>
						<path
							fill="currentColor"
							d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
							className="fa-primary"
						/>
					</g>
				</svg>
			</div>
			<div className="nav-container">
				<Link to="/generatePassword">
					<button type="button">Generate Password</button>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fad"
						data-icon="sync"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						style={{ width: '1rem' }}
						className="svg-inline--fa fa-sync fa-w-16 fa-5x"
					>
						<g className="fa-group">
							<path
								fill="currentColor"
								d="M0 500V299.67a12 12 0 0 1 12-12h200.33a12 12 0 0 1 12 12v47.41a12 12 0 0 1-12.57 12l-101.87-4.88a176.07 176.07 0 0 0 317.25-56.94 12 12 0 0 1 11.67-9.26h49.09a12 12 0 0 1 11.8 14.18C478.07 417.08 377.19 504 256 504a247.43 247.43 0 0 1-188.76-87.17l4.13 82.57a12 12 0 0 1-12 12.6H12a12 12 0 0 1-12-12z"
								className="fa-secondary"
							/>
							<path
								fill="currentColor"
								d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.4 247.4 0 0 1 188.9 87.34l-4-82.77A12 12 0 0 1 452.92 0h47.41a12 12 0 0 1 12 12v200.33a12 12 0 0 1-12 12H300a12 12 0 0 1-12-12v-47.41a12 12 0 0 1 12.57-12l101.53 4.88a176.07 176.07 0 0 0-317.24 56.94A12 12 0 0 1 73.19 224H24.1a12 12 0 0 1-11.8-14.18z"
								className="fa-primary"
							/>
						</g>
					</svg>
				</Link>
				<Link id="add-item" to="/addItem">
					<button type="button">Add Item</button>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fad"
						data-icon="plus"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						style={{ width: '1rem' }}
						className="svg-inline--fa fa-plus fa-w-14 fa-5x"
					>
						<g className="fa-group">
							<path
								fill="currentColor"
								d="M176 448a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V304h-96zm64-416h-32a32 32 0 0 0-32 32v144h96V64a32 32 0 0 0-32-32z"
								className="fa-secondary"
							/>
							<path
								fill="currentColor"
								d="M448 240v32a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"
								className="fa-primary"
							/>
						</g>
					</svg>
				</Link>
				<Link id="view-all" to="/manageAll">
					<button type="button">Open Item Manager</button>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="database"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						style={{ width: '1rem' }}
						className="svg-inline--fa fa-database fa-w-14 fa-3x"
					>
						<path
							fill="currentColor"
							d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"
							className=""
						/>
					</svg>
				</Link>
				<button
					className="dark-mode-button"
					type="button"
					onClick={toggleDarkMode}
				>
					<div className="dark-mode-container">
						<span id="dark-mode-text">Dark Mode</span>
						<svg
							id="dark-mode-icon"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							stroke="currentColor"
							style={{ width: '1rem' }}
							viewBox="0 0 24 24"
						>
							<path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};
export default Index;
