import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

interface UserContextProviderProps {
  children: ReactNode;
}

interface IUserContextData {
  email: any;
  setEmail: React.Dispatch<any>;
  username: any;
  setUsername: React.Dispatch<any>;
  password: any;
  setPassword: React.Dispatch<any>;
  token: any;
  setToken: React.Dispatch<any>;
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const UserContextProvider = ({
  children,
}: UserContextProviderProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserData() {
  const context = useContext(UserContext);
  return context;
}
