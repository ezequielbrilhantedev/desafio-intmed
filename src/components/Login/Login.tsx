import * as S from './styles';
import Logo from '../../assets/icons/logo.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <img src={Logo} />
        </div>
        <S.Form id="form">
          <S.InputEmail>
            <input
              placeholder="Email ou Login"
              id="inputEmail"
              type="text"
            />
          </S.InputEmail>
          <S.InputPassword>
            <input
              placeholder="Senha"
              id="inputPassword"
              type="password"
            />
            <span>
              <VisibilityIcon />
            </span>
          </S.InputPassword>
          <S.DivCheckBox>
            <S.Checkbox type="checkbox" />
            <S.RememberPassword>
              Lembrar minha senha
            </S.RememberPassword>
          </S.DivCheckBox>
          <S.DivButtons>
            <S.ButtonCreateCount>
              <Link
                className="createCount"
                to="/criar-conta"
              >
                Criar Conta
              </Link>
            </S.ButtonCreateCount>
            <S.ButtonAccess>
              <Link className="accessCount" to="/home">
                Acessar
              </Link>
            </S.ButtonAccess>
          </S.DivButtons>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;