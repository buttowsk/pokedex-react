import { MenuIcon, DropdownContent, DropdownLink, Container, DropdownText, LogoutButton } from './styles.js';
import { useState } from 'react';
import { dbApi } from '../../services/dbApi.js';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { TbPokeball } from 'react-icons/tb';
import { GiPokecog } from 'react-icons/gi';


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
        <DropdownText><AiOutlineUser/>{ username }</DropdownText>
        <DropdownLink to={ '/favorites' }><BsHeartFill/> Favorites</DropdownLink>
        <DropdownLink to={ '/home' }><HiHome/> Home</DropdownLink>
        <DropdownLink to={ '/pokedex' }><TbPokeball/> Pokedex</DropdownLink>
        <DropdownLink to={ '/items' }><GiPokecog/> Items</DropdownLink>
        <LogoutButton type={ 'button' } onClick={ handleLogout }><FiLogOut/> Logout</LogoutButton>
      </DropdownContent>
    </Container>
  );
};