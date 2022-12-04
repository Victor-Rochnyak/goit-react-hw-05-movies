import React from 'react';
import {
  Header,
  Ul,
  Img,
  ClickLink,
  DivLogo,
  Div,
  NavItem,
  Li,
} from './AppBar.styled';
import logo from '../../assets/tmovie.png';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movie' },
];

export const AppBar = () => {
  return (
    <Header>
      <Div>
        <DivLogo>
          <Img src={logo} alt="" />
          <ClickLink to="/">tMovies</ClickLink>
        </DivLogo>
        <Ul>
          {navItems.map(({ href, text }) => (
            <Li key={href}>
              <NavItem to={href} key={href}>
                {text}
              </NavItem>
            </Li>
          ))}
        </Ul>
      </Div>
    </Header>
  );
};
