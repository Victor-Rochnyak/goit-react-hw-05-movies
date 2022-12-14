import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { URL_BACKDROP } from 'components/Api/ApiConfig';

export const DivBackdrop = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 100%; */
  /* height: 73vh; */
  padding-top: 20px;
  /* padding-bottom: 20px; */
  background-image: 
    ${props => `url(${URL_BACKDROP}${props.backdrop.backdrop_path})`};
  background-size: cover;
  background-position: top;
  /* background-position: center; */
  background-repeat: no-repeat;
  object-fit: cover;
  box-shadow: inset 0px 0px 523px 50px rgba(110, 109, 109, 0.35);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to top, #000000, transparent);
  }
`;

export const NavItem = styled(NavLink)`
  position: absolute;
  top: 80px;
  left: 20px;
`;
export const Img = styled.img`
  border-radius: 10px;
`;

export const MoveInfo = styled.div`
  margin-top: 200px;
  margin-left: 50px;
  display: flex;
`;

export const PosterInfo = styled.div`
  width: 60%;
  padding: 2rem;
  position: relative;
`;

export const Genres = styled.div`
  &> * ~ span {
    margin-left: 0.5rem;
  }
  margin-top: 50px;
`;



export const SpanGenres = styled.span`
  padding: 0.5rem 1.5rem;
  border: 2px solid white;
  color: white;
  border-radius: 20px;
  font-size: .8rem;
  font-weight: 600;
  background-color: rgba(58, 58, 58, 0.5);;

`;
export const H1Title = styled.h1`
  font-size: 3rem;
    line-height: 1;
    color: white;
margin-bottom: 25px;
`;

export const Overview = styled.p`
 font-size: 18px;
    color: white;
    margin-top: 25px;
    width: 82%;
`;
export const POverview = styled.p`
  margin-top: 76px;
    font-weight: 700;
    font-size: 29px;
    color: white;
`;