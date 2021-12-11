import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import BackButton from '../BackButton/BackButton';
import { DarkModeButton } from '../DarkModeButton/DarkMode';
import DropDown from '../DropDown/DropDown';
import RotateButton from '../RotateButton/RotateButton';
import SearchBar from '../SearchBar/SearchBar';

const NavHeader = () => {
	const { toggleDarkMode, isDarkMode } = useDarkMode();

	return (
		<div className="bg-gray-50 dark:bg-gray-900 pb-4">
			<div className="flex flex-row pt-4 pl-4 pr-4 justify-between items-center w-full">
				<div className="flex flex-row text-2xl font-bold">
					<h4 className="text-blue-500 dark:text-white">Pass</h4>
					<h4 className="dark:text-blue-500">Key</h4>
				</div>
				<div className="flex flex-row ml-26 items-center">
					<div>
						<BackButton />
					</div>
					<div className="ml-4">
						<Link to="/generatePassword">
							<RotateButton
								className="generate-password-button"
								type="button"
								onClick={() => null}
							/>
						</Link>
					</div>
					<div className="ml-4">
						<DarkModeButton
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
							maskKey="dark-mode-nav-mask"
						/>
					</div>
				</div>
			</div>
			<SearchBar />
			<DropDown />
		</div>
	);
};
export default NavHeader;
