import axios from 'axios';
import {useEffect, useState} from "react";
export const usePokemonEvolutions = (pokemonId) => {
    const [evolutions, setEvolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvolutions = async () => {
            try {
                setIsLoading(true);

                // 1. Buscar informações do Pokemon
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);

                // 2. Extrair ID da cadeia de evolução
                const evolutionChainUrl = data?.evolution_chain?.url;
                const evolutionChainId = evolutionChainUrl?.split('/').slice(-2, -1)[0];

                // 3. Buscar informações da cadeia de evolução
                const { data: evolutionChain } = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}`);
                const { chain } = evolutionChain;

                // 4. Montar lista de evoluções
                const evolutionsList = [];

                let currentChainItem = chain;

                do {
                    const { species, evolution_details: evolutionDetails } = currentChainItem;
                    evolutionsList.push({ name: species.name, url: species.url, ...evolutionDetails[0] });
                    currentChainItem = currentChainItem?.evolves_to?.[0];
                } while (currentChainItem);

                setEvolutions(evolutionsList);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvolutions();
    }, [pokemonId]);

    return { evolutions, isLoading, error };
};