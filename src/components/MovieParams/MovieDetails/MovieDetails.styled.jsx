import styled from 'styled-components';
import { URL_BACKDROP } from 'components/Api/ApiConfig';

export const Div = styled.div`
  height: 80vh;
  position: relative;
  /* background-position: center; */
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

export const MoveContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding: 0 2rem;
  top: -397px;
`;

export const MovePoster = styled.div`
flex:1;

`;
export const MoveImg = styled.div`
 background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding-top: 135%;

`;

export const MoveDetails = styled.div`
/* position: absolute;
    bottom: -46px; */

`;