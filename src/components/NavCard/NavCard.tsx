import { Link } from 'react-router-dom';

interface NavCardProps {
	to: string;
	name: string;
}

const NavCard: React.FC<NavCardProps> = ({ to, children, name }) => (
	<Link
		className="flex mb-2 p-3 rounded-lg bg-gray-100  shadow-none text-black dark:bg-zinc-800 dark:text-white hover:bg-white hover:shadow dark:transition-shadow dark:hover:shadow transition-shadow dark:hover:bg-zinc-900"
		to={to}
	>
		{children}
		<button type="button" className="text-base">
			{name}
		</button>
	</Link>
);
export default NavCard;
