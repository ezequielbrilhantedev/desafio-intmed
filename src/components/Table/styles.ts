import styled from 'styled-components';

export const Container = styled.section`
  .table {
    width: 100%;
    padding: 0 16px;
  }

  .th-table {
    color: var(--gray-2, #A8A8A8);
    font-size: 12px;
    font-family: Roboto;
    font-weight: 700;
    text-transform: uppercase;
  }

  .thead-table {
    text-align: left;
  }

  tbody td {
  padding: 14px;
  color: var(--black, #444);
  font-size: 13px;
  font-family: Roboto;
  text-align: left;
  }

  tbody tr:nth-child(even) {
    background: var(--gray-1, #F8F8F8);
  }
`;

export const ButtonDesmarcar = styled.span`
  background-color: none;
  border: none;
  color: var(--primary, #49B4BB);
  font-size: 13px;
  font-family: Roboto;
  cursor: pointer
`;
