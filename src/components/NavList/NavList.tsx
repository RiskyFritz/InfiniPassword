import { Link } from 'react-router-dom';
import './NavList.css';

const NavList = () => (
	<div className="flex flex-col">
		<Link
			className="flex m-2 p-2 text-base border-2 border-blue-400 rounded-xl"
			to="/addItem"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="plus"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				style={{ width: '1rem' }}
				className="w-5 mr-8 ml-4"
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
		<Link
			className="flex m-2 p-2 text-base border-2 border-blue-400 rounded-xl"
			id="view-all"
			to="/manageAll"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="database"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				className="w-5 mr-8 ml-4"
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
