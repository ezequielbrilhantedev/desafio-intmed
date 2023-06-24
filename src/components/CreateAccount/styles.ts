import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 410px;
  height: 350px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #444444;
  font-family: 'Roboto', sans-serif;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const InputEmail = styled.div`
  width: auto;
  height: 40px;
  border: 1px solid #a8a8a8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  input {
    border: none
  }

  ::placeholder {
    font-size: 13px;
    color: #a8a8a8;
    font-family: 'Roboto';
    font-weight: 400;
  }

  :focus {
    outline: none
  }

`;

export const InputPassword = styled.div`
  width: auto;
  height: 40px;
  border: 1px solid #a8a8a8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  input {
    border: none
  }

  ::placeholder {
    font-size: 13px;
    color: #a8a8a8;
    font-family: 'Roboto';
    font-weight: 400;
  }

  :focus {
    outline: none
  }

  span {
    cursor: pointer;
    color: #a8a8a8;
  }

`;

export const DivButtons = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  align-items: baseline;
  justify-content: space-between;

  .cancel {
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
  .confirm {
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

export const Confirm = styled.button`
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
`;
