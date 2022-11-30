import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: black;
  height: 50px;
  padding: 15px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DivLogo = styled.div`
  display: flex;
`;
export const Ul = styled.ul`
  display: flex;
`;

export const ClickLink = styled(Link)`
  font-size: 40px;
  font-weight: 500;
  text-decoration: none;
  color: white;
  font-family: 'Segoe UI';

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.green};
    /* background-color: ${p => p.theme.colors.primary}; */
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Li = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-right: 20px;
  }
  /* width: 60px;
  height: 30px;
  padding: 5px;
  border-radius: 5px; */
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */

 
`;

export const NavItem = styled(NavLink)`
  font-family: 'Segoe UI';
  font-size: 20px;
   background-color: #fff;
  padding: 10px;
  border-radius: 5px; 
  text-decoration: none;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.green};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }
`;
