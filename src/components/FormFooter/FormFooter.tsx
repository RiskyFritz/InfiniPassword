import { useState } from 'react';
import { Link } from 'react-router-dom';

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
		<div className="flex flex-row mx-4 mt-2 items-center">
			<div>
				<Link
					className="outline-none px-3 py-2 bg-zinc-700 text-white hover:bg-zinc-900 mr-2 rounded-xl shadow dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-black"
					to="/"
				>
					<button className="font-semibold" type="button">
						Cancel
					</button>
				</Link>
			</div>
			<div>
				<button
					className="outline-none px-3 py-2 bg-blue-400 hover:bg-blue-500 rounded-xl shadow font-semibold"
					type="submit"
					onClick={handleClick}
				>
					Submit
				</button>
			</div>
		</div>
	);
};
export default FormFooter;
