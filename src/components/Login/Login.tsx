import * as S from './styles';
import Logo from '../../assets/icons/logo.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserData } from '../../context';
import { useEffect, useState } from 'react';

const Login = () => {
  const {
    password,
    setPassword,
    username,
    setUsername,
    setToken,
  } = useUserData();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe =
      localStorage.getItem('rememberMe');

    if (storedUsername && storedRememberMe === 'true') {
      setUsername(storedUsername);
      setRememberMe(true);
    }

    if (storedPassword && storedRememberMe === 'true') {
      setPassword(storedPassword);
      setRememberMe(true);
    }
  });

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/users/login',
        {
          username: username,
          password: password,
        }
      );
      console.log('login', response.data);
      setToken(response.data);

      if (response.status === 200) {
        if (rememberMe) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }

        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hendleUserNameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event: any) => {
    setRememberMe(event.target.checked);
  };

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
              value={username}
              onChange={hendleUserNameChange}
            />
          </S.InputEmail>
          <S.InputPassword>
            <input
              placeholder="Senha"
              id="inputPassword"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
            />
            <span onClick={togglePasswordVisibility}>
              {!showPassword ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </span>
          </S.InputPassword>
          <S.DivCheckBox>
            <S.Checkbox
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
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
            <S.ButtonAccess onClick={handleLogin}>
              Acessar
            </S.ButtonAccess>
          </S.DivButtons>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
