import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './styles';

const Table = () => {
  const data = [
    {
      especialidade: 'Cardiologia',
      name: 'Dr. Caio Carlos Ferreira',
      data: '01/01/2020',
      hora: '13:00',
    },
    {
      especialidade: 'Cardiologia',
      name: 'Dr. Caio Carlos Ferreira',
      data: '01/01/2020',
      hora: '13:00',
    },
    {
      especialidade: 'Cardiologia',
      name: 'Dr. Caio Carlos Ferreira',
      data: '01/01/2020',
      hora: '13:00',
    },
    {
      especialidade: 'Cardiologia',
      name: 'Dr. Caio Carlos Ferreira',
      data: '01/01/2020',
      hora: '13:00',
    },
  ];

  return (
    <S.Container>
      <table className="table">
        <thead className="thead-table">
          <tr>
            <th className="th-table">Especialidade</th>
            <th className="th-table">Nome</th>
            <th className="th-table">Data</th>
            <th className="th-table">Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.especialidade}</td>
              <td>{item.name}</td>
              <td>{item.data}</td>
              <td>{item.hora}</td>
              <td>
                <span className="contentBtn">
                  <S.ButtonDesmarcar>
                    Desmarcar
                  </S.ButtonDesmarcar>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};

export default Table;
