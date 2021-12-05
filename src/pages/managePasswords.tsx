import { useState, useEffect } from 'react';
import './index.css';
import BackButton from '../components/BackButton/BackButton';
import ActionContainer from '../components/ActionContainer/ActionContainer';
import { renderItems } from '../utils/renderItems';
import { CredentialsItem } from '../utils/getItems';
import ItemCard from '../components/itemCard/ItemCard';
import { deleteCredentials } from '../utils/deletePassword';

const ManagePasswords = () => {
	// ---- hooks ----
	// > state

	const [items, setItems] = useState<CredentialsItem[]>([]);

	// > lifecycle
	useEffect(() => {
		const fetchItems = async () => {
			try {
				const newItems = await renderItems(
					'http://localhost:3000/password',
				);
				console.log(newItems);
				setItems(newItems);
			} catch (error) {
				console.log(error);
			}
		};
		fetchItems();
	}, []);

	return (
		<div>
			<BackButton />
			<ActionContainer />
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
								deleteCredentials(item.id);
							}}
						/>
					</div>
				))
			}
		</div>
	);
};

export default ManagePasswords;
