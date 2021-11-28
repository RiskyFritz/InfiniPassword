import React, { useState } from 'react';
import './index.css';
import BackButton from '../components/BackButton/BackButton';
import ActionContainer from '../components/ActionContainer/ActionContainer';
import { renderItems } from '../utils/renderItems';

const ManagePasswords = async () => {
	// const [items, setItems] = useState(new Promise(resolve => resolve(getItems())));
	// setItems(getItems('http://localhost:3000/password'));
	const items = await renderItems('http://localhost:3000/password');
	return (
		<div>
			<BackButton />
			<ActionContainer />
			{
				// loop through items and render them
				items.map((item, index) => (
					<div key={index}>
						<h2>{item.name}</h2>
						<p>{item.folder}</p>
						<p>{item.username}</p>
						<p>{item.password}</p>
					</div>
				))
			}
		</div>
	);
};
export default ManagePasswords;
