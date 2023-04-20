import { pokeApi } from '../../services/pokeApi.js';
import { useState, useCallback, useEffect } from 'react';
import { Item } from '../../models/Item/index.js';
export const useAllItems = () => {
	const [items, setItems] = useState([]);
	const [itemsLoading, setItemsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [itemsPage, setItemsPage] = useState(1);
	const [totalItemsPages, setTotalItemsPages] = useState(1);
	const [hasMoreItems, setHasMoreItems] = useState(true);

	const getAllItems = useCallback(async (page) => {
		setItemsLoading(true);
		try {
			const { data } = await pokeApi.get(`/item?limit=20&offset=${(page - 1) * 20}`);
			const { results } = data;
			const itemsPromises = results.map(async (result) => {
				const id = result.url.split('/').slice(-2, -1)[0];
				const { data: itemData } = await pokeApi.get(`/item/${id}`);
				const item = new Item(
					itemData.name,
					itemData.sprites.default,
					itemData.id,
					itemData.effect_entries[0].effect,
					itemData.cost,
					itemData.pokemon,
					itemData.name,
					itemData.category.name,
				);
				return [id, item]; // retorna um array com o ID e o item
			});
			const items = await Promise.all(itemsPromises);
			const newItems = Object.fromEntries(items); // transforma o array de items em um objeto
			setItems((prevItems) => ({ ...prevItems, ...newItems })); // adiciona os novos items ao objeto existente
			setTotalItemsPages(Math.ceil(data.count / 20));
			setHasMoreItems(page < totalItemsPages);
		} catch (err) {
			setError(err);
		} finally {
			setItemsLoading(false);
		}
	}, [totalItemsPages]);

	useEffect(() => {
		getAllItems(itemsPage);
	}, [getAllItems, itemsPage]);

	useEffect(() => {
		sessionStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	return { items, itemsLoading, error, hasMoreItems, setItemsPage };
};