import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export const PrivateRoute: React.FC = () => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
