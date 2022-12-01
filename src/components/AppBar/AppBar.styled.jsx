import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: transparent;
  height: 50px;
  padding: 15px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
 
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
`;

export const NavItem = styled(NavLink)`
  position: relative;
  font-family: 'Segoe UI';
  font-weight: 500;
  font-size: 20px;
  color: white;
  /* background-color: #fff;
  padding: 10px;
  border-radius: 5px; */
  text-decoration: none;

  &.active {
    /* background-color: ${p => p.theme.colors.primary}; */
    color: ${p => p.theme.colors.green};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.green};
    /* background-color: ${p => p.theme.colors.primary}; */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    margin-bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 2px;
    background-color: ${p => p.theme.colors.fiolity};
  }
  &.active::after,
  &:hover::after {
    width: 100%;
  }
`;
