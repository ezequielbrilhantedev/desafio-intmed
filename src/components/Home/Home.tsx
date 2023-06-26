import AppBar from '@mui/material/AppBar';
import Logo from '../../assets/icons/logo.svg';
import * as S from './styles';
import AddIcon from '@mui/icons-material/Add';
import Table from '../Table/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context';
import axios from 'axios';

const Home = () => {
  const data = useContext(UserContext);
  const token = data.token.token;
  const [query, setQuery] = useState([]);

  const navigate = useNavigate();

  const getAllQuerys = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/consultas',
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const queryData = response.data;
      setQuery(queryData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    getAllQuerys();
  }, []);

  return (
    <>
      <S.Container>
        <AppBar
          position="static"
          color="inherit"
          elevation={0}
        >
          <S.Navbar>
            <S.Logo src={Logo} />
            <S.UserInfos>
              <S.UserName>{data.username}</S.UserName>
              <S.Desconectar onClick={handleLogout}>
                Desconectar
              </S.Desconectar>
            </S.UserInfos>
          </S.Navbar>
          <S.DivBody>
            <S.SectionHeader>
              <S.TitleBody>Consulta Clínica</S.TitleBody>
              <S.Button>
                <span className="contentBtn">
                  <AddIcon />
                  <Link className="link" to="nova-consulta">
                    Nova Consulta
                  </Link>
                </span>
              </S.Button>
            </S.SectionHeader>
            <S.SectionTable>
              <Table query={query} setQuery={setQuery} />
            </S.SectionTable>
          </S.DivBody>
        </AppBar>
      </S.Container>
    </>
  );
};

export default Home;
