import { useState } from 'react';

interface CollapseButtonProps {
	className?: string;
	type: 'button' | 'submit' | 'reset';
	onClick: () => void;
}

const CollapseButton: React.FC<CollapseButtonProps> = ({
	onClick,
	type,
	children,
	className,
}) => {
	// --- hooks ---
	const [isCollapsed, setIsCollapsed] = useState(false);

	// --- functions ---
	// handle when user clicks on button
	const handleClick = () => {
		// set spinning animation to true
		setIsCollapsed(!isCollapsed);
		// trigger developers custom click handler
		onClick();
	};

	return (
		<button
			style={{
				transform: isCollapsed ? 'rotate(-180deg)' : 'rotate(0deg)',
				transition: 'transform 300ms ease-in-out',
			}}
			onClick={handleClick}
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={className}
		>
			{children}
		</button>
	);
};
export default CollapseButton;
