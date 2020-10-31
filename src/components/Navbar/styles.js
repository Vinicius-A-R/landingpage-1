import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

import { Container } from '../../styles/global';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  height: 80px;

  color: #fff;

  font-size: 1.2rem;
  background-color: var(--color-dark);

  z-index: 999;
`;

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  color: #fff;
  font-size: 2rem;
  text-decoration: none;

  cursor: pointer;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    font-size: 1.8rem;
    transform: translate(-100%, 60%);

    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  padding: 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%;')};

    width: 100%;
    height: calc(100vh - 80px);
    /* padding: 1rem 0.5rem; */

    opacity: 1;
    transition: all 0.5s ease;
    background-color: #101522;
  }
`;

export const NavItem = styled.li`
  height: 48px;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0.5rem 1rem;

  color: #fff;

  @media screen and (max-width: 960px) {
    display: table;
    width: 100%;
    padding: 2rem;
    text-align: center;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    list-style: none;

    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 8px 16px;
`;
