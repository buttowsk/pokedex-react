import { TopRow, Content, Container, BackIcon, MenuIcon, Title, List } from './styles.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ItemCard } from '../../components/ItemCard/index.jsx';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { ScrollBackComponent } from '../../components/ScrollBackComponent/index.jsx';

export const Items = ({ items, setPage, hasMore, loading }) => {
  const navigate = useNavigate();
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
      <TopRow>
        <BackIcon onClick={ () => navigate(-1) }/>
        <Title>Items</Title>
        <MenuIcon/>
      </TopRow>
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