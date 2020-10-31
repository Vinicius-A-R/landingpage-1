import React, { useState, useEffect } from 'react';

import { IconContext } from 'react-icons';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../styles/global';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from './styles';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {toggle ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={toggle}>
            <NavItem>
              <NavLink to="/">HOME</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/services">SERVICES</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/products">PRODUCTS</NavLink>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button primary fontBig onClick={() => setToggle(false)}>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
