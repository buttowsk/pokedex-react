import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: #F5EBEB;
  }

  *::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background: #b60b0b;
    height: 5px;
    width: 5px;
    border-radius: 5px;
  }

  *::-moz-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  *::-moz-scrollbar-thumb {
    background-color: #555;
  }
`;

export const themes = {
  fire: {
    name: 'fire',
    color: '#FDDFDF',
    backgroundColor: '#EE8130',
  },
  grass: {
    name: 'grass',
    color: '#DEFDE0',
    backgroundColor: '#7AC74C',
  },
  electric: {
    name: 'electric',
    color: '#FCF7DE',
    backgroundColor: '#F7D02C',
  },
  water: {
    name: 'water',
    color: '#DEF3FD',
    backgroundColor: '#6390F0',
  },
  ground: {
    name: 'ground',
    color: '#f4e7da',
    backgroundColor: '#E2BF65',
  },
  rock: {
    name: 'rock',
    color: '#d5d5d4',
    backgroundColor: '#B6A136',
  },
  fairy: {
    name: 'fairy',
    color: '#fceaff',
    backgroundColor: '#D685AD',
  },
  poison: {
    name: 'poison',
    color: '#DEFDE0',
    backgroundColor: '#A33EA1',
  },
  bug: {
    name: 'bug',
    color: '#DEFDE0',
    backgroundColor: '#A6B91A',
  },
  dragon: {
    name: 'dragon',
    color: '#97b3e6',
    backgroundColor: '#6F35FC',
  },
  psychic: {
    name: 'psychic',
    color: '#eaeda1',
    backgroundColor: '#F95587',
  },
  flying: {
    name: 'flying',
    color: '#F5F5F5',
    backgroundColor: '#A98FF3',
  },
  fighting: {
    name: 'fighting',
    color: '#E6E0D4',
    backgroundColor: '#C22E28',
  },
  normal: {
    name: 'normal',
    color: '#F5F5F5',
    backgroundColor: '#A8A77A',
  },
  ghost: {
    name: 'ghost',
    color: '#F8F8F8',
    backgroundColor: '#735797',
  },
  ice: {
    name: 'ice',
    color: '#F8F8F8',
    backgroundColor: '#96D9D6',
  },
  steel: {
    name: 'steel',
    color: '#0B2447',
    backgroundColor: '#B7B7CE',
  },
  dark: {
    name: 'dark',
    color: '#c6c6a7',
    backgroundColor: '#705746',
  },

};