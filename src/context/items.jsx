import { createContext } from 'react';
import { useAllItems } from '../hooks/useAllItems/index.js';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const { items, itemsLoading, error, hasMoreItems, setItemsPage, getItemById } = useAllItems();

  return (
    <ItemsContext.Provider value={ { items, itemsLoading, error, hasMoreItems, setItemsPage, getItemById } }>
      { children }
    </ItemsContext.Provider>
  );

}

