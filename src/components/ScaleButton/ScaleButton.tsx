import React, { useState } from 'react';

interface ScaleButtonProps {
	className?: string;
	type: 'button' | 'submit' | 'reset';
	onClick: () => void;
}

const ScaleButton: React.FC<ScaleButtonProps> = ({
	onClick,
	type,
	children,
	className,
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
			{children}
		</button>
	);
};
export default ScaleButton;
