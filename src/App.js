import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthPage from './pages/AuthPage/AuthPage';
  
const AppRoutes = {
  HOME: "/",
  SIGNIN: "/auth",
  NOT_FOUND: "*",
};

function App() {
  return (
  <Routes>
      <Route path={AppRoutes.HOME} element={<HomePage />} />
      <Route path={AppRoutes.SIGNIN} element={<AuthPage />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>

  );
}

export default App;
