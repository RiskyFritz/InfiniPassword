import { Link } from 'react-router-dom';
import './NavList.css';

const NavList = () => (
	<div className="nav-list-container">
		<Link className="side-nav-card" to="/generatePassword">
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
			<button type="button">Generate Password</button>
		</Link>
		<Link className="side-nav-card" id="add-item" to="/addItem">
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
			<button type="button">Add Item</button>
		</Link>
		<Link className="side-nav-card" id="view-all" to="/manageAll">
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
			<button type="button">Open Item Manager</button>
		</Link>
	</div>
);
export default NavList;
