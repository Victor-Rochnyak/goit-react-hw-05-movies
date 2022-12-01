import styled from 'styled-components';

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
    opacity: 1;
    transform: translateX(0%) scale(1);
  }
`;

export const Img = styled.img`
  width: 227px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;
export const P = styled.p`
  transform: translateX(50% -50%) scale(0.9);
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
  opacity: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 7px;
  width: 93%;
  height: 45px;
  position: absolute;
  bottom: -1px;
  border-radius: 5px;
  /* border: 1px solid #734cf7; */
  font-size: 18px;
  font-weight: 700;
  color: #734cf7;
  /* background-color: rgb(115, 76, 247,0.66); */
`;
