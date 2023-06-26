import AppBar from '@mui/material/AppBar';
import Logo from '../../assets/icons/logo.svg';
import * as S from './styles';
import AddIcon from '@mui/icons-material/Add';
import Table from '../Table/Table';
import { Link } from 'react-router-dom';

const Home = () => {
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
              <S.UserName>Usuario</S.UserName>
              <S.Login>Desconectar</S.Login>
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
              <Table />
            </S.SectionTable>
          </S.DivBody>
        </AppBar>
      </S.Container>
    </>
  );
};

export default Home;
