import React from 'react';
import { useState, useEffect, useRef } from 'react';
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
// import { Link } from 'react-router-dom';
import logo from '../../assets/tmovie.png';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movie' },
];

export const AppBar = () => {
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   const headerSshrink = () => {
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       headerRef.current.classList.add('shrink');
  //     } else headerRef.current.classList.remove('shrink');
  //   };
  //   window.addEventListener('scroll', headerSshrink);
  //   return () => {
  //     window.removeEventListener('scroll', headerSshrink);
  //   };
  // }, []);

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
