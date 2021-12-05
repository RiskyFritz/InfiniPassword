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
						data-prefix="fas"
						data-icon="pencil"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="svg-button"
						style={{ width: '1rem' }}
					>
						<path
							fill="currentColor"
							d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
							className=""
						/>
					</svg>
				</button>
				<button className="delete-button" type="button">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fal"
						data-icon="trash-alt"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						className="svg-button"
						style={{ width: '1rem' }}
						onClick={handleClick}
					>
						<path
							fill="currentColor"
							d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
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
