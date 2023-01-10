import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { Header } from './components/Header';
import { Menu } from './components/Menu';

import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};
