import styled from 'styled-components';

export const Section = styled.section``;
export const Div = styled.div`
  margin-top: 100px;
`;

export const H1 = styled.h1`
  color: ${p => p.theme.colors.fiolity};
  text-align: center;
  margin-bottom: 20px;
  /* font-size: 40px; */
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;

  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  border: none;
  outline: none;

  &:hover::placeholder {
    transition: 0.5s;
  }
  &::placeholder {
    color: gray;
  }
`;

export const Btn = styled.button`
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  color: white;
  width: 55px;
  background: ${p => p.theme.colors.fiolity};
  height: 55px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 900;

  transition: 0.5s;

  &:hover {
    background-color: ${p => p.theme.colors.green};
  }
`;
