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
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="sync"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				style={{ width: '1rem' }}
				className="svg-inline--fa fa-sync fa-w-16 fa-5x"
			>
				<g className="fa-group">
					<path
						fill="currentColor"
						d="M0 500V299.67a12 12 0 0 1 12-12h200.33a12 12 0 0 1 12 12v47.41a12 12 0 0 1-12.57 12l-101.87-4.88a176.07 176.07 0 0 0 317.25-56.94 12 12 0 0 1 11.67-9.26h49.09a12 12 0 0 1 11.8 14.18C478.07 417.08 377.19 504 256 504a247.43 247.43 0 0 1-188.76-87.17l4.13 82.57a12 12 0 0 1-12 12.6H12a12 12 0 0 1-12-12z"
						className="fa-secondary"
					/>
					<path
						fill="currentColor"
						d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.4 247.4 0 0 1 188.9 87.34l-4-82.77A12 12 0 0 1 452.92 0h47.41a12 12 0 0 1 12 12v200.33a12 12 0 0 1-12 12H300a12 12 0 0 1-12-12v-47.41a12 12 0 0 1 12.57-12l101.53 4.88a176.07 176.07 0 0 0-317.24 56.94A12 12 0 0 1 73.19 224H24.1a12 12 0 0 1-11.8-14.18z"
						className="fa-primary"
					/>
				</g>
			</svg>
			{children}
		</button>
	);
};
export default RotateButton;
