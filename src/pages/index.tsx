import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const index = () => (
	<div>
		<div className="searchContainer">
			<input
				id="searchInput"
				className="searchInput"
				type="text"
				placeholder="Search Your Passwords"
				spellCheck="false"
			/>
			<i className="fa fa-search" aria-hidden="true" />
		</div>
		<div className="navContainer">
			<Link id="generatePassword" to="/generatePassword">
				<button type="button">Generate Password</button>
				<i className="fa fa-refresh" aria-hidden="true" />
			</Link>
			<Link id="addPassword" to="/addPassword">
				<button type="button">Add Password</button>
				<i className="fa fa-plus" aria-hidden="true" />
			</Link>
			<Link id="viewAll" to="/passwordManager">
				<button type="button">Open Password Manager</button>
				<i className="fa fa-database" aria-hidden="true" />
			</Link>
			<button type="button" id="darkModeToggle" className="darkMode">
				<p>Toggle Dark Mode</p>
				<svg
					id="darkModeIcon"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					stroke="currentColor"
					width="16"
					height="16"
					viewBox="0 0 24 24"
				>
					<path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
				</svg>
			</button>
		</div>
	</div>
);
export default index;
