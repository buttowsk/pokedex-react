import { Ring, Loading, Container, LoadingContainer } from './styles.js';

export const LoadingComponent = () => {
  return (
    <Container>
      <LoadingContainer>
        <Ring></Ring>
        <Ring></Ring>
        <Ring></Ring>
        <Loading>Loading...</Loading>
      </LoadingContainer>
    </Container>
  )
}