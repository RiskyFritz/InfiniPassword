import { useState } from 'react';

interface ScaleButtonProps {
	className?: string;
	classNameSvg?: string;
	type: 'button' | 'submit' | 'reset';
	onClick: () => void;
}

const ScaleButton: React.FC<ScaleButtonProps> = ({
	onClick,
	type,
	children,
	className,
	classNameSvg,
}) => {
	// --- hooks ---
	const [isScaling, setIsScaling] = useState(false);

	// --- functions ---
	// handle when user clicks on button
	const handleClick = () => {
		// set spinning animation to true
		setIsScaling(true);
		// trigger developers custom click handler
		onClick();
		// after 1 second stop spinning animation
		setTimeout(() => {
			setIsScaling(false);
		}, 500);
	};

	return (
		<button
			style={{
				transform: isScaling ? 'scale(1.2)' : 'scale(1)',
				transition: 'transform 0.5s',
			}}
			onClick={handleClick}
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={className}
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="clone"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className={classNameSvg}
			>
				<g className="fa-group">
					<path
						fill="currentColor"
						d="M48 512a48 48 0 0 1-48-48V176a48 48 0 0 1 48-48h48v208a80.09 80.09 0 0 0 80 80h208v48a48 48 0 0 1-48 48H48z"
						className="fa-secondary"
					/>
					<path
						fill="currentColor"
						d="M512 48v288a48 48 0 0 1-48 48H176a48 48 0 0 1-48-48V48a48 48 0 0 1 48-48h288a48 48 0 0 1 48 48z"
						className="fa-primary"
					/>
				</g>
			</svg>
			{children}
		</button>
	);
};
export default ScaleButton;
