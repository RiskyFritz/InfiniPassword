import { useState } from 'react';

interface DropdownButtonProps {
	className?: string;
	classNameSvg?: string;
	rotation?: string;
	onClick: () => void;
	name: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
	onClick,
	children,
	className,
	classNameSvg,
	rotation,
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
					aria-hidden="true"
					focusable="false"
					data-prefix="fad"
					data-icon="caret-down"
					role="img"
					rotate={rotation}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					className={classNameSvg}
					style={{
						transform: isCollapsed
							? 'rotate(180deg)'
							: 'rotate(0deg)',
						transition: 'transform 300ms ease-in-out',
					}}
				>
					<g className="fa-group">
						<path
							fill="currentColor"
							d="M160 168h128.92c17.85 0 26.8 22.48 14.17 35.63L174.17 337.89c-.26.28-.53.54-.8.8A19.41 19.41 0 0 1 160 344z"
							className="fa-secondary"
						/>
						<path
							fill="currentColor"
							d="M160 344a19.41 19.41 0 0 1-13.37-5.29c-.27-.26-.54-.52-.8-.8L16.91 203.63C4.28 190.48 13.23 168 31.08 168H160z"
							className="fa-primary"
						/>
					</g>
				</svg>
			</div>
			{children}
		</button>
	);
};
export default DropdownButton;
