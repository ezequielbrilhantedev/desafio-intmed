import * as S from './styles';
import Logo from '../../assets/icons/logo.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <img src={Logo} />
        </div>
        <S.Title>Crie sua conta</S.Title>
        <S.Form id="form">
          <S.InputEmail>
            <input
              placeholder="Nome"
              id="inputName"
              type="text"
            />
          </S.InputEmail>
          <S.InputEmail>
            <input
              placeholder="Email"
              id="inputEmail"
              type="email"
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
          <S.InputPassword>
            <input
              placeholder="Confirmar Senha"
              id="inputConfirmPassword"
              type="password"
            />
            <span>
              <VisibilityIcon />
            </span>
          </S.InputPassword>

          <S.DivButtons>
            <S.ButtonCancel>
              <Link className="cancel" to="/">
                Cancelar
              </Link>
            </S.ButtonCancel>
            <S.Confirm>
              <Link className="confirm" to="/">
                Confirmar
              </Link>
            </S.Confirm>
          </S.DivButtons>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default CreateAccount;
