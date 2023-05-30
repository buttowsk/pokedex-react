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
import { AuthorizationContext } from '../../context/authorization.jsx';


export const Menu = ({ username, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsAuthorized } = AuthorizationContext;
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
          setIsAuthorized(false);
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
        <DropdownLink to={ '/favorites' }
                      page={ currentPage === 'favorites' ? 'selected' : '' }><BsHeartFill/> Favorites</DropdownLink>
        <DropdownLink to={ '/' }><HiHome/> Home</DropdownLink>
        <DropdownLink to={ '/pokedex' }
                      page={ currentPage === 'pokedex' ? 'selected' : '' }><TbPokeball/> Pokedex</DropdownLink>
        <DropdownLink to={ '/items' }
                      page={ currentPage === 'items' ? 'selected' : '' }><GiPokecog/> Items</DropdownLink>
        <LogoutButton type={ 'button' } onClick={ handleLogout }><FiLogOut/> Logout</LogoutButton>
      </DropdownContent>
    </Container>
  );
};