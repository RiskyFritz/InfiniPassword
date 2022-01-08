import { useState } from 'react';

interface DropdownButtonProps {
	className?: string;
	classNameSvg?: string;
	onClick: () => void;
	name: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
	onClick,
	children,
	className,
	classNameSvg,
	name,
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
		<button className={className} type="button" onClick={handleClick}>
			<div className="flex flex-row justify-between">
				<h4>{name}</h4>
				<svg
					width="7"
					height="13"
					viewBox="0 0 7 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={classNameSvg}
					style={{
						transform: isCollapsed
							? 'rotate(-90deg)'
							: 'rotate(0deg)',
						transition: 'transform 300ms ease-in-out',
					}}
				>
					<path
						d="M6 11.1667L1.33333 6.50004L6 1.83337"
						stroke="#3F3F46"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			{children}
		</button>
	);
};
export default DropdownButton;
