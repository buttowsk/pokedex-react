import {
	HeldBy,
	HeldByContainer,
	ItemCardContainer,
	ItemName,
	ItemDescription,
	ItemPrice,
	ItemImage,
	PokemonImage,
	ItemDescriptionContainer,
	ItemPriceContainer,
} from './styles.js';
import { useColors } from '../../hooks/useColors/index.js';

export const ItemCard = ({ item }) => {
	const { useGetBgColor, getTextColor } = useColors();
	const bgColor = useGetBgColor(item.image);
	const textColor = getTextColor(bgColor);

	return (
		<ItemCardContainer bg={bgColor} color={textColor}>
			<ItemImage src={item.image} alt={item.name} />
			<ItemName>{item.name}</ItemName>
			<ItemDescriptionContainer>
				<ItemDescription>{item.description}</ItemDescription>
			</ItemDescriptionContainer>
			<ItemPriceContainer>
				<ItemPrice>$ {item.cost}</ItemPrice>
			</ ItemPriceContainer>
			{item.heldByPokemon && (
				<HeldByContainer>
					<HeldBy>Held by:</HeldBy>
					{item.heldByPokemon.map((pokemon, index) => (
						<p>{pokemon}</p>
					))}
				</HeldByContainer>
			)}
		</ItemCardContainer>
	);
}