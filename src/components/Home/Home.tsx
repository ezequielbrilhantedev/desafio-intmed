import AppBar from '@mui/material/AppBar';
import Logo from '../../assets/icons/logo.svg';
import * as S from './styles';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <>
      <S.Container>
        <AppBar position="static" color="inherit">
          <S.Navbar>
            <img src={Logo} />
            <S.UserInfos>
              <S.UserName>Usuario</S.UserName>
              <h1>Desconectar</h1>
            </S.UserInfos>
          </S.Navbar>
        </AppBar>
      </S.Container>
    </>
  );
};

export default Home;
