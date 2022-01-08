import { useEffect, useState } from 'react';
import ItemCard from '../components/itemCard/ItemCard';
import { deleteCredentials } from '../utils/deletePassword';
import { CredentialsItem, getRecentPasswords } from '../utils/recentPasswords';
import './index.css';

const Index = () => {
	const [recentPasswords, setRecentPasswords] = useState<CredentialsItem[]>(
		[],
	);

	// > lifecycle
	useEffect(() => {
		const fetchPasswords = async () => {
			try {
				const newRecentPasswords = await getRecentPasswords(
					'http://localhost:3000/lastUsedOn',
				);
				console.log(newRecentPasswords);
				setRecentPasswords(newRecentPasswords);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPasswords();
	}, []);

	return (
		<div>
			{
				// loop through items and render them
				recentPasswords.map((recentPassword, index) => (
					<div key={index}>
						<ItemCard
							id={recentPassword.id}
							url={recentPassword.url}
							name={recentPassword.name}
							username={recentPassword.username}
							password={recentPassword.password}
							onClick={() => {
								// remove item from items array and set state
								const newRecentPasswords =
									recentPasswords.filter(
										(card) => card.id !== recentPassword.id,
									);
								setRecentPasswords(newRecentPasswords);
								deleteCredentials(recentPassword.id);
							}}
						/>
					</div>
				))
			}
		</div>
	);
};

export default Index;
