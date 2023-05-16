import { Content, Container, List } from './styles.js';
import { useContext, useEffect } from 'react';
import { ItemCard } from '../../components/ItemCard/index.jsx';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import { ItemsContext } from '../../context/items.jsx';

export const Items = () => {
  const { items, itemsLoading: loading, hasMoreItems: hasMore, setItemsPage: setPage } = useContext(ItemsContext);
  const itemsArray = Object.values(items);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollBottom = documentHeight - (scrollTop + windowHeight);
    if (scrollBottom < 0.5 * windowHeight) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  if (!itemsArray.length) {
    return <LoadingComponent/>;
  }


  return (
    <Container>
      <Header currentPage={ 'items' }/>
      <Content>
        <ScrollBackComponent/>
        <List>
          { itemsArray.map((item, index) => (
            <ItemCard key={ index } item={ item }/>
          )) }
        </List>
      </Content>
    </Container>
  );
};