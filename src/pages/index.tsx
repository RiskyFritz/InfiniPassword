import { Link } from 'react-router-dom';
import './index.css';
import { useDarkMode } from '../contexts/DarkModeContext';
import SearchBar from '../components/SearchBar/SearchBar';
import NavHeader from '../components/NavHeader/NavHeader';

const Index = () => {
	// --- hooks ----
	// > dark mode
	const { toggleDarkMode } = useDarkMode();

	return (
		<div>
			<NavHeader />
			<SearchBar />
			<div className="recent-passwords">
				<h4 className="recent-title">Recent Passwords</h4>
			</div>
		</div>
	);
};
export default Index;
