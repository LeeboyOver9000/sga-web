import { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  children?: ReactNode;
  username?: string;
  isLogged?: boolean;
}

export const AuthContext = createContext<AuthContextType>({});

export const AuthProvider: React.FC<AuthContextType> = ({ children }) => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('isLogged');

    if (userToken === '1') {
      setUsername('Teste');
      setIsLogged(true);
    }
  }, []);

  const loginUser = async (login: string, senha: string) => {
    setLoading(true);
    setMessage(null);

    // try {
    //   const { data } = await axios.post("/usuarios", { login, senha });
    //   localStorage.setItem("isLogged", "1");
    //   setUser(data);
    //   setIsLogged(true);
    // } catch (error) {
    //   setMessage(error);
    //   setIsLogged(false);
    // }

    setLoading(false);

    localStorage.setItem('isLogged', '1');
    setUsername('Teste');
    setIsLogged(true);
  };

  const logoutUser = () => {
    localStorage.removeItem('isLogged');
    setIsLogged(false);
  };

  // const registerUser = async (formData) => {
  //   setLoading(true);
  //   setMessage(null);

  //   try {
  //     const { data } = await axios.post('/usuarios', formData);
  //     setMessage(data);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }

  //   setLoading(false);
  // };

  const context = {
    username,
    message,
    loading,
    isLogged,
    loginUser,
    logoutUser,
    // registerUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
