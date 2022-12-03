import styled from 'styled-components';
import { URL_BACKDROP } from 'components/Api/ApiConfig';
export const Div = styled.div`
   height: 80vh;
  position: relative;
   background-position: center; 
   background-size: cover;
  background-repeat: no-repeat;

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
    height: 100px;
    background-image: linear-gradient(to top, #000000, transparent);
  }   
`;
