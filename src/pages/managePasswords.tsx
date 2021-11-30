import { useState, useEffect } from 'react';
import './index.css';
import BackButton from '../components/BackButton/BackButton';
import ActionContainer from '../components/ActionContainer/ActionContainer';
import { renderItems } from '../utils/renderItems';
import { CredentialsItem } from '../utils/getItems';

const ManagePasswords = () => {

	// ---- hooks ----
	// > state

	const [items, setItems] = useState<CredentialsItem[]>([]);

	// > lifecycle
	useEffect(() => {
	const fetchItems = async () => {
        try {
            const newItems = await renderItems('http://localhost:3000/password');
		console.log(newItems);
        setItems(items);
        } catch (error) {
            console.log(error);
        }
	}
	fetchItems();
	}, [])
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
