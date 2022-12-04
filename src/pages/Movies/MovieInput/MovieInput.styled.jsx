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
`;

export const Input = styled.input`
  border-radius: 5px;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  border: none;
`;
