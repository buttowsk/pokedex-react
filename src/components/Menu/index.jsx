import { MenuIcon, DropdownContent, DropdownLink, Container, DropdownText, LogoutButton } from './styles.js';
import { useState } from 'react';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';


export const Menu = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <Container>
      <MenuIcon onClick={ toggleDropdown }/>
      <DropdownContent isOpen={ isOpen }>
        <DropdownText>{ username }</DropdownText>
        <DropdownLink to={ '/favorites' }>Favorites</DropdownLink>
        <DropdownLink to={ '/home' }>Home</DropdownLink>
        <DropdownLink to={ '/pokedex' }>Pokedex</DropdownLink>
        <LogoutButton type={ 'button' } onClick={ handleLogout }><FiLogOut/></LogoutButton>
      </DropdownContent>
    </Container>
  );
};