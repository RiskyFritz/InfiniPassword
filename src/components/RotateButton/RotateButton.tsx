import React, { useState } from 'react';

interface RotateButtonProps {
	className?: string;
	type: 'button' | 'submit' | 'reset';
	onClick: () => void;
}

const RotateButton: React.FC<RotateButtonProps> = ({
	onClick,
	type,
	children,
	className,
}) => {
	// --- hooks ---
	const [isSpinning, setIsSpinning] = useState(false);

	// --- functions ---
	// handle when user clicks on button
	const handleClick = () => {
		// set spinning animation to true
		setIsSpinning(true);
		// trigger developers custom click handler
		onClick();
		// after 1 second stop spinning animation
		setTimeout(() => {
			setIsSpinning(false);
		}, 500);
	};

	return (
		<button
			style={{
				transform: isSpinning ? 'rotate(360deg)' : 'rotate(0deg)',
				transition: isSpinning ? 'transform 500ms linear' : '',
				transformOrigin: 'center',
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
export default RotateButton;
