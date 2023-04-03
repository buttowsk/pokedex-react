import {
    PokeImage,
    IdText,
    NameText,
    Modal,
    MenuItem,
    MenuRow,
    FirstColumn,
    SecondColumn,
    BackButton,
    ElementsRow, TypeText,
} from './styles.js';
import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import {themes} from "../../globalStyles/styles.js";
import {PokeAbout} from "../PokeAbout/index.jsx";
import {PokeStats} from "../PokeStats/index.jsx";
import {PokeEvolutions} from "../PokeEvolutions/index.jsx";

export const PokeModal = ({ pokeInfo, isModalOpen, setIsModalOpen, pokeSpecies, color, bgColor, pokeList }) => {
    const { id, name, types, sprites } = pokeInfo;
    const [selectedPage, setSelectedPage] = useState('about');

    const handlePageTitleClick = (page) => {
        setSelectedPage(page);
    }

    useEffect(() => {
        const body = document.querySelector('body');

        if (isModalOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'unset';
        }

        return () => {
            body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const theme = themes[pokeInfo.types[0]?.type.name];

    return (
      <>
          {isModalOpen && (
            <ThemeProvider theme={theme}>
                <Modal bg={bgColor} textColor={color}>
                    <BackButton onClick={() => setIsModalOpen(false)} />
                    <FirstColumn>
                        <IdText>#{id}</IdText>
                        <NameText>{name}</NameText>
                        <ElementsRow>
                            <TypeText theme={themes[types[0]?.type.name]}>{types[0]?.type?.name}</TypeText>
                            {types[1]?.type?.name && <TypeText theme={themes[types[1]?.type.name]}>{types[1]?.type.name}</TypeText>}
                        </ElementsRow>
                        <PokeImage src={sprites.other['official-artwork'].front_default} />
                    </FirstColumn>
                    <SecondColumn selectedPage={selectedPage}>
                        <MenuRow>
                            <MenuItem page={selectedPage === 'about' ? 'selected' : ''} onClick={() => handlePageTitleClick('about')}>About</MenuItem>
                            <MenuItem page={selectedPage === 'stats' ? 'selected' : ''} onClick={() => handlePageTitleClick('stats')}>Stats</MenuItem>
                            <MenuItem page={selectedPage === 'evolutions' ? 'selected' : ''} onClick={() => handlePageTitleClick('evolutions')}>Evolutions</MenuItem>
                        </MenuRow>
                        {selectedPage === 'about' && <PokeAbout pokeInfo={pokeInfo} pokeSpecies={pokeSpecies} />}
                        {selectedPage === 'stats' && <PokeStats pokeInfo={pokeInfo} />}
                        {selectedPage === 'evolutions' && <PokeEvolutions pokemonName={name} pokeList={pokeList} />}
                    </SecondColumn>
                </Modal>
            </ThemeProvider>
          )}
      </>
    );

}