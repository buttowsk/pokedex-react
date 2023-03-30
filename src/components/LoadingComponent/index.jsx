import { Ring, Loading, Container } from './styles.js'

export const LoadingComponent = () => {
    return (
        <Container>
            <Ring></Ring>
            <Ring></Ring>
            <Ring></Ring>
            <Loading>Loading...</Loading>
        </Container>
    )
}