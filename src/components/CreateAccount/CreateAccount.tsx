import * as S from './styles';
import Logo from '../../assets/icons/logo.svg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
interface IForm {
  username: string;
  email: string;
  password: any;
  confirmPassword: any;
}

const CreateAccount = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirm = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const { register, handleSubmit } = useForm<IForm>({
    mode: 'all',
  });

  const handleSubmitData = async (data: any) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/users',
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
      );

      if (response.status === 201) {
        navigate('/');
      }
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <img src={Logo} />
        </div>
        <S.Title>Crie sua conta</S.Title>
        <S.Form
          id="form"
          onSubmit={handleSubmit(handleSubmitData)}
        >
          <S.InputEmail>
            <input
              placeholder="Nome"
              id="inputName"
              type="text"
              required
              {...register('username')}
            />
          </S.InputEmail>
          <S.InputEmail>
            <input
              placeholder="Email"
              id="inputEmail"
              type="email"
              required
              {...register('email')}
            />
          </S.InputEmail>
          <S.InputPassword>
            <input
              placeholder="Senha"
              id="inputPassword"
              required
              {...register('password')}
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
          <S.InputPassword>
            <input
              placeholder="Confirmar Senha"
              id="inputConfirmPassword"
              required
              {...register('confirmPassword')}
              type={
                showConfirmPassword ? 'text' : 'password'
              }
              value={confirmPassword}
              onChange={handlePasswordConfirm}
            />
            <span onClick={toggleConfirmPasswordVisibility}>
              {!showConfirmPassword ? (
                <VisibilityIcon />
              ) : (
                <VisibilityOffIcon />
              )}
            </span>
          </S.InputPassword>

          <S.DivButtons>
            <S.ButtonCancel>
              <Link className="cancel" to="/">
                Cancelar
              </Link>
            </S.ButtonCancel>
            <S.Confirm type="submit">Confirmar</S.Confirm>
          </S.DivButtons>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default CreateAccount;
