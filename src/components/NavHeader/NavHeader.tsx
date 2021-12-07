import './NavHeader.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';

const NavHeader = () => {
	const { toggleDarkMode } = useDarkMode();
	const [isNavListOpen, setIsNavListOpen] = useState(false);

	return (
		<div className="nav-header-container">
			<Link to="/sideNav">
				<button
					type="button"
					className="nav-header-button"
					// onclick display nav list and nothing else
					onClick={() => setIsNavListOpen(!isNavListOpen)}
				>
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="bars"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						className="svg-inline--fa fa-bars fa-w-14 fa-7x"
						style={{ width: '1.25rem' }}
					>
						<path
							fill="currentColor"
							d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
							className=""
						/>
					</svg>
				</button>
			</Link>
			<div className="brand-name">
				<h4>PassKey</h4>
			</div>
			<div className="dark-mode-nav-container">
				<button
					className="nav-header-dark-mode-button"
					type="button"
					onClick={toggleDarkMode}
				>
					<div className="nav-header-dark-mode">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="moon"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="svg-inline--fa fa-moon fa-w-16 fa-7x"
							style={{ width: '1.25rem' }}
						>
							<path
								fill="currentColor"
								d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
								className=""
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};
export default NavHeader;
