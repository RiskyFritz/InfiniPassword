import { useDarkMode } from '../../contexts/DarkModeContext';
import { DarkModeButton } from '../DarkModeButton/DarkMode';
import SearchBar from '../SearchBar/SearchBar';

const NavHeader = () => {
	const { toggleDarkMode, isDarkMode } = useDarkMode();

	return (
		<div>
			<div className="flex flex-row pt-4 pl-4 pr-4 w-full items-center">
				<div className="text-2xl ml-2 font-bold">
					<h4>PassKey</h4>
				</div>
				<div className="ml-40">
					<DarkModeButton
						isDarkMode={isDarkMode}
						toggleDarkMode={toggleDarkMode}
						maskKey="dark-mode-nav-mask"
					/>
				</div>
			</div>
			<SearchBar />
		</div>
	);
};
export default NavHeader;
