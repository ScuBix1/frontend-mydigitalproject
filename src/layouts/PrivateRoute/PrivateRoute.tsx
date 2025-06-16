import { useAuthContext } from '@/context/auth/useAuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/signin' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
