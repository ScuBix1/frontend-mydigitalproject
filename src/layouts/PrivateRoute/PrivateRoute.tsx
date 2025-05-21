import { useAuth } from '@/context/auth/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/signin' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
