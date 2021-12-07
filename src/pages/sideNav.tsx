import SearchBar from '../components/SearchBar/SearchBar';
import BackButton from '../components/BackButton/BackButton';
import NavList from '../components/NavList/NavList';
import './index.css';

const SideNav = () => (
	<div>
		<BackButton />
		<SearchBar />
		<NavList />
	</div>
);
export default SideNav;
