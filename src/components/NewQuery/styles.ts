import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 96vh;
  align-items: center;
`;

export const Wrapper = styled.div`
  /* border: 1px solid; */
  width: 410px;
  height: 350px;
`;

export const Title = styled.h1`
  color: var(--black, #444);

  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
`;

export const Form = styled.form`
  margin-top: 40px;

  .bodyForm {
    gap: 20px;
    display: grid;
  }
`;

export const Select = styled.select`
  height: 54px;
  border-radius: 4px;
  border: solid 1px #a8a8a8;
  cursor: pointer;
  
  ${(props) =>
    props.disabled &&
    css`
    background: #F8F8F8;
    cursor: not-allowed;
  `}
`;

export const DivInput = styled.div`
  display: contents;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 41px;
  align-items: baseline;
  justify-content: space-between;

  .createCount {
    text-decoration: none;
    text-align: center;
    width: 180px;
    height: 40px;
    border: none;
    color: #49b4bb;
    background: #ffffff;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
  .accessCount {
    text-decoration: none;
    text-align: center;
    width: 180px;
    height: 40px;
    border: none;
    color: #ffffff;
    background: #49b4bb;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const ButtonCancel = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  color: #49b4bb;
  background: #ffffff;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

export const ButtonConfirm = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  color: #ffffff;
  background: #49b4bb;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  border-radius: 8px;

  ${(props) =>
    props.disabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;
