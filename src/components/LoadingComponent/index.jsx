import { Ring, Loading, Container, LoadingContainer } from './styles.js';

export const LoadingComponent = ({ scrollLoading }) => {
  return (
    <Container scrollLoading={ scrollLoading }>
      <LoadingContainer>
        <Ring></Ring>
        <Ring></Ring>
        <Ring></Ring>
        <Loading>Loading...</Loading>
      </LoadingContainer>
    </Container>
  );
};