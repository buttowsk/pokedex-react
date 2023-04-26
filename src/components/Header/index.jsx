import { Container, DropdownContent, MenuContainer, BackIcon, NavText, Username } from './styles.js';
import { Menu } from '../Menu/index.jsx';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { HiCog } from 'react-icons/hi';

export const Header = ({ currentPage }) => {
  const username = localStorage.getItem('name');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  const handleLogout = () => {
    dbApi.post('/logout')
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <BackIcon onClick={() => navigate(-1)}/>
      <MenuContainer>
        <NavText page={ currentPage === 'pokedex' ? 'selected' : '' } onClick={ () => navigate('/pokedex') }>Pokedex</NavText>
        <NavText page={ currentPage === 'items' ? 'selected' : '' } onClick={ () => navigate('/items') }>Itens</NavText>
        <NavText page={ currentPage === 'favorites' ? 'selected' : '' } onClick={ () => navigate('/favorites') }>Favorites</NavText>
        <NavText onClick={ () => navigate('/') }>Home</NavText>
        <NavText onClick={ toggleDropdown }>{ <HiCog/> }</NavText>
        <DropdownContent isOpen={ isOpen } ref={ dropdownRef }>
          <Username>{ username }</Username>
          <NavText onClick={ handleLogout }>Logout <FiLogOut/></NavText>
        </DropdownContent>
        <Menu username={ username }/>
      </MenuContainer>
    </Container>
  );
};