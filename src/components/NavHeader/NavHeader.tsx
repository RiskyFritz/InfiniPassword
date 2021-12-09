import './NavHeader.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { DarkModeButton } from '../DarkModeButton/DarkMode';

const NavHeader = () => {
	const { toggleDarkMode, isDarkMode } = useDarkMode();
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
				<DarkModeButton
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
					maskKey="dark-mode-nav-mask"
				/>
			</div>
		</div>
	);
};
export default NavHeader;
