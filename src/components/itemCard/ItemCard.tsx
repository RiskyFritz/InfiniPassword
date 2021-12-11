import './ItemCard.css';
import { useState } from 'react';
import ScaleButton from '../ScaleButton/ScaleButton';

interface ItemCardProps {
	id: string;
	url?: string;
	name: string;
	username?: string;
	password: string;
	imageurl?: string;
	onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
	name,
	username,
	password,
	url,
	id,
	imageurl,
	onClick,
	children,
}) => {
	const [isDeletingPassword, setIsDeletingPassword] = useState(false);
	const [isDeleteAnimation, setIsDeleteAnimation] = useState(false);
	// if imageurl is undefined, use default image
	const image = imageurl || 'https://i.imgur.com/XyQXZQl.png';

	const handleClick = () => {
		setIsDeletingPassword(true);
		setIsDeleteAnimation(true);
		console.log(isDeletingPassword);
		// trigger developers custom click handler
		setTimeout(() => {
			setIsDeletingPassword(false);
			setIsDeleteAnimation(false);
			onClick();
		}, 250);
	};

	return (
		<div
			className="item-container"
			// if isDeletingPassword, slowly fade out itemCard
			style={{
				transform: isDeleteAnimation ? 'opacity(0)' : 'opacity(100)',
				transition: 'transform 250ms ease-in-out',
			}}
		>
			<div className="image-container">
				<img
					src={image}
					alt=""
					style={{ width: '1rem', height: '1rem' }}
				/>
			</div>
			<div className="value-container">
				<div className="primary-value">{url}</div>
				<div className="secondary-value">{username}</div>
			</div>
			<div className="action-container">
				<ScaleButton
					className="copy-password"
					type="button"
					onClick={() =>
						// copy password to clipboard
						navigator.clipboard.writeText(password)
					}
				/>
				<button className="edit-button" type="button">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="far"
						data-icon="ellipsis-v"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 128 512"
						className="h-6"
					>
						<path
							fill="currentColor"
							d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
							className=""
						/>
					</svg>
				</button>
				{children}
			</div>
		</div>
	);
};
export default ItemCard;
