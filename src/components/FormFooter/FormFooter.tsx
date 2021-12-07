import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormFooter.css';

interface FormFooterProps {
	className?: string;
	onClick: () => void;
}

const FormFooter: React.FC<FormFooterProps> = ({
	onClick,
	children,
	className,
}) => {
	// --- hooks ---
	const [isSubmitting, setIsSubmitting] = useState(false);

	// --- functions ---
	// handle when user clicks on button
	const handleClick = () => {
		// set spinning animation to true
		setIsSubmitting(true);
		// trigger developers custom click handler
		onClick();
		// after 1 second stop spinning animation
		setTimeout(() => {
			setIsSubmitting(false);
		}, 500);
	};

	return (
		<div className="form-footer">
			<Link className="cancel-anchor" to="/">
				<button className="cancel-button" type="button">
					Cancel
				</button>
			</Link>
			<button
				className="submit-button"
				type="submit"
				onClick={handleClick}
			>
				Submit
			</button>
		</div>
	);
};
export default FormFooter;
