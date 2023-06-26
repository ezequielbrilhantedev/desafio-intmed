import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  /* padding: 0 16%; */
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 105px;
`;

export const UserInfos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const UserName = styled.h1`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #a8a8a8;
  cursor: pointer;
  `;

export const Desconectar = styled.button`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #49b4bb;
  background: #ffffff ;
  border: none;
  cursor: pointer;
`;

export const DivBody = styled.div`
  margin-top: 17px;
  height: 90vh;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
`;

export const TitleBody = styled.h1`
  color: var(--black, #444);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 700;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #49B4BB;
  border: none;
  width: 138px;
  height: 24px;
  cursor: pointer;

  color: #FFF;
  text-align: center;
  font-size: 13px;
  font-family: Roboto;

  .contentBtn {
    display: flex;
    align-items: center;
    gap: 6px:
  }

  .link {
    text-decoration: none;
    color: #FFF;
  }
`;

export const SectionTable = styled.section`
  
`;
