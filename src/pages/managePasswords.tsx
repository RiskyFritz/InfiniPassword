import { useState, useEffect } from 'react';
import './index.css';
import ActionContainer from '../components/ActionContainer/ActionContainer';
import { renderPasswords } from '../utils/renderItems';
import ItemCard from '../components/itemCard/ItemCard';
import { deleteCredentials } from '../utils/deletePassword';
import { PasswordItem } from '../utils/interfaces';

const ManagePasswords = () => {
	// ---- hooks ----
	// > state

	const [items, setItems] = useState<PasswordItem[]>([]);

	// > lifecycle
	useEffect(() => {
		const fetchPasswords = async () => {
			try {
				const newItems = await renderPasswords(
					'http://localhost:3000/password',
				);
				console.log(newItems);
				setItems(newItems);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPasswords();
	}, []);

	return (
		<div>
			<ActionContainer 
			onDownload={() => {}}
			onUpload={() => {}}
			/>
			{
				// loop through items and render them
				items.map((item, index) => (
					<div key={index}>
						<ItemCard
							id={item.id}
							url={item.url}
							name={item.name}
							username={item.username}
							password={item.password}
							onClick={() => {
								// remove item from items array and set state
								const newItems = items.filter(
									(card) => card.id !== item.id,
								);
								setItems(newItems);
								deleteCredentials(item.id, 'password');
							}}
						/>
					</div>
				))
			}
		</div>
	);
};

export default ManagePasswords;
