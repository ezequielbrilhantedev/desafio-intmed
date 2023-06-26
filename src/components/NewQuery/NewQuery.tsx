import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../context';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface IResponseItem {
  id: number;
  medico: {
    id: number;
    crm: number;
    nome: string;
    especialidade: {
      id: number;
      nome: string;
    };
  };
  dia: string;
  horarios: string[];
}

interface ISelectOption {
  label: string;
  value: number;
}

export const NewQuery = () => {
  const dataAPI = useContext(UserContext);
  const token = dataAPI.token.token;
  const [schedule, setSchedule] = useState<IResponseItem[]>(
    []
  );
  const [especialidade, setEspecialidade] = useState<
    number | null
  >(null);
  const [medico, setMedico] = useState<number | null>(null);
  const [data, setData] = useState<string | null>(null);
  const [hora, setHora] = useState<string | null>(null);

  const medicosFiltrados = especialidade
    ? schedule.filter(
        (item) =>
          item.medico.especialidade.id === especialidade
      )
    : [];

  const especialidadeOptions: ISelectOption[] =
    schedule.map((item) => ({
      label: item.medico.especialidade.nome,
      value: item.medico.especialidade.id,
    }));

  const medicoOptions: ISelectOption[] =
    medicosFiltrados.map((item) => ({
      label: item.medico.nome,
      value: item.medico.id,
    }));

  const dataOptions: string[] = medico
    ? medicosFiltrados
        .filter((item) => item.medico.id === medico)
        .map((item) => item.dia)
    : [];

  const horaOptions: string[] =
    medico && data
      ? medicosFiltrados
          .filter(
            (item) =>
              item.medico.id === medico && item.dia === data
          )
          .flatMap((item) => item.horarios)
      : [];

  const { handleSubmit } = useForm({
    mode: 'all',
  });

  const isFormValid =
    especialidade !== null &&
    medico !== null &&
    data !== null &&
    hora !== null;

  const navigate = useNavigate();

  const getSchedule = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/agendas',
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const scheduleData = response.data;
      console.log(scheduleData);
      setSchedule(scheduleData);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    const agendaID = schedule.map((item) => item.id);
    try {
      const response = await axios.post(
        'http://localhost:3000/consultas',
        {
          agenda_id: agendaID,
          horario: hora,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );

      if (
        response.status === 200 ||
        response.status === 201
      ) {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Nova Consulta</S.Title>
        <S.Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="bodyForm">
            <S.DivInput>
              <label></label>
              <S.Select
                value={especialidade || ''}
                onChange={(e: any) => {
                  setEspecialidade(Number(e.target.value));
                  setMedico(null);
                  setData(null);
                  setHora(null);
                }}
              >
                <option value="" disabled selected>
                  Especialidade
                </option>
                {especialidadeOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </S.Select>
              <S.Select
                value={medico || ''}
                onChange={(e: any) => {
                  setMedico(Number(e.target.value));
                  setData(null);
                  setHora(null);
                }}
                disabled={!especialidade}
              >
                <option value="" disabled selected>
                  Médico
                </option>
                {medicoOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </S.Select>
              <S.Select
                value={data || ''}
                onChange={(e: any) => {
                  setData(e.target.value);
                  setHora(null);
                }}
                disabled={!medico}
              >
                <option value="" disabled selected>
                  Data
                </option>
                {dataOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </S.Select>
              <S.Select
                value={hora || ''}
                onChange={(e: any) =>
                  setHora(e.target.value)
                }
                disabled={!data}
              >
                <option value="" disabled>
                  Hora
                </option>
                {horaOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </S.Select>
            </S.DivInput>
          </div>
          <S.DivButtons>
            <Link to="/home">
              <S.ButtonCancel>Cancelar</S.ButtonCancel>
            </Link>
            <S.ButtonConfirm
              type="submit"
              disabled={!isFormValid}
            >
              Confirmar
            </S.ButtonConfirm>
          </S.DivButtons>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};
