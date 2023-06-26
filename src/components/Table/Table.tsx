import { useContext } from 'react';
import * as S from './styles';
import { UserContext } from '../../context';
import axios from 'axios';

interface IConsulta {
  id: number;
  medico: Medico;
  dia: string;
  horario: string;
}

interface Medico {
  id: number;
  nome: string;
  especialidade: Especialidade;
}

interface Especialidade {
  id: number;
  nome: string;
}

const Table = ({ query, setQuery }: any) => {
  const data = useContext(UserContext);
  const token = data.token.token;
  console.log(query);

  const formatDate = (data: string) => {
    const dataAgendamento = new Date(data);
    return dataAgendamento.toLocaleDateString('pt-BR');
  };

  const handleDesmarcar = async (id: number) => {
    try {
      await axios.delete(
        `http://localhost:3000/consultas/${id}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      // Filtrar a lista de consultas removendo o item com o ID correspondente
      const updatedQuery = query.filter(
        (item: IConsulta) => item.id !== id
      );
      setQuery(updatedQuery);
    } catch (error) {
      console.log(error);
    }
  };

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
          {query?.map((item: IConsulta) => (
            <tr key={item.id}>
              <td>{item.medico.especialidade.nome}</td>
              <td>{item.medico.nome}</td>
              <td>{formatDate(item.dia)}</td>
              <td>{item.horario}</td>
              <td>
                <span className="contentBtn">
                  <S.ButtonDesmarcar
                    onClick={() => handleDesmarcar(item.id)}
                  >
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
