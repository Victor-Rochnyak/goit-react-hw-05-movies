import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  background-color: #ffccddee;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav``;

export const NavItem = styled(NavLink)`
  width: 30px;
  height: 20px;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }
`;
