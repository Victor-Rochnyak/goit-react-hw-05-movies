import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  /* justify-content: center */
`;

export const Li = styled.li`
  position: relative;
  width: 227px;
  height: 400px;
  border-radius: 10px;
  transition: box-shadow 200ms ease-in-out, transform 400ms ease-in-out;
  box-shadow: ${({ theme }) => theme.boxsh.boxsh};

  :hover,
  :focus-visible {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.boxsh.boxshpr};
  }
  :hover p {
    transform: scale(1);
    color: ${p => p.theme.colors.green};
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
`;

export const Img = styled.img`
  width: 227px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DivP = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
    height: 50px;
    align-items: center;
`;

export const P = styled.p`
position: absolute;
  transform: scale(0.9);
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
  font-size: 18px;
  font-weight: 500;
  color: white;
  

  
`;
