import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { URL_BACKDROP } from 'components/Api/ApiConfig';

// export const Div = styled.div`
//   width: 100%;
//   height: 100%; 
//    padding-top: 20px;
//   padding-bottom: 20px;
//    /* background-image: linear-gradient(
//       to right,
//       rgba(58, 58, 58, 0.5),
//       rgba(47, 48, 58, 0.5)
//     ),
//     ${props => `url(${URL_BACKDROP}${props.backdrop.backdrop_path})`}; */
//   background-size: cover;
//   background-position: top;
//   background-position: center;
//   background-repeat: no-repeat;
//   object-fit: cover;
//   box-shadow: inset 0px 0px 523px 50px rgba(110, 109, 109, 0.35); 
// `;

export const NavItem = styled(NavLink)`
  position: absolute;
  top: 80px;
  left: 20px;
`;
export const Img = styled.img`
 
`;
