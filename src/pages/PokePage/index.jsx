import {
	PokeImage,
	IdText,
	NameText,
	Container,
	MenuItem,
	MenuRow,
	FirstColumn,
	SecondColumn,
	BackButton,
	ElementsRow, TypeText,
} from './styles.js';
import { useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import { themes } from "../../globalStyles/styles.js";
import { PokeAbout } from "../../components/PokeAbout/index.jsx";
import { PokeStats } from "../../components/PokeStats/index.jsx";
import { PokeEvolutions } from "../../components/PokeEvolutions/index.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useColors } from '../../hooks/useColors/index.js';

export const PokePage = ({ pokeList }) => {
	const { pokemon } = useParams();
	const navigate = useNavigate();
	const { useGetBgColor, getTextColor } = useColors();
	const poke = pokeList.find(poke => poke.name === pokemon);
	const [selectedPage, setSelectedPage] = useState('about');
	const bgColor = useGetBgColor(poke.image);
	const color = getTextColor(bgColor);
	const handlePageTitleClick = (page) => {
		setSelectedPage(page);
	}

	useEffect(() => {
		localStorage.setItem('poke', JSON.stringify(poke));
	}, [poke]);

	useEffect(() => {
		if (!poke) {
			navigate('/pokedex');
		}
	}, [poke, navigate]);

	if (!poke) {
		return <LoadingComponent />
	}

	const theme = themes[poke.types[0]];

	return (
		<ThemeProvider theme={theme}>
			<Container bg={bgColor} textColor={color}>
				<BackButton onClick={() => navigate('/pokedex')} />
				<FirstColumn>
					<IdText>#{poke.id}</IdText>
					<NameText>{poke.name}</NameText>
					<ElementsRow>
						<TypeText theme={themes[poke.types[0]]}>{poke.types[0]}</TypeText>
						{poke.types[1] && <TypeText theme={themes[poke.types[1]]}>{poke.types[1]}</TypeText>}
					</ElementsRow>
					<PokeImage src={poke.image} />
				</FirstColumn>
				<SecondColumn selectedPage={selectedPage}>
					<MenuRow>
						<MenuItem page={selectedPage === 'about' ? 'selected' : ''} onClick={() => handlePageTitleClick('about')}>About</MenuItem>
						<MenuItem page={selectedPage === 'stats' ? 'selected' : ''} onClick={() => handlePageTitleClick('stats')}>Stats</MenuItem>
						<MenuItem page={selectedPage === 'evolutions' ? 'selected' : ''} onClick={() => handlePageTitleClick('evolutions')}>Evolutions</MenuItem>
					</MenuRow>
					{selectedPage === 'about' && <PokeAbout poke={poke} />}
					{selectedPage === 'stats' && <PokeStats poke={poke} />}
					{selectedPage === 'evolutions' && <PokeEvolutions poke={poke} />}
				</SecondColumn>
			</Container>
		</ThemeProvider>
	);
}